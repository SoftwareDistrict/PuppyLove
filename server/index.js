require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const flash = require('connect-flash');
const pool = require('./db/db.js');
require('./passport/passport');
// const data = require('../data.json');
const {
  addUser, getUsers, getDogs, addFriend, isAccCreated,
} = require('./queries.js');

const PORT = process.env.PORT || 3000;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

const app = express();

/* Middleware================================================================== */

// const isLoggedIn = (req, res, next) => {
//   if (req.user) {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };
app.use(express.json());
app.use(cors());
app.use(express.static(CLIENT_PATH));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  secure: false,
}));
app.use(flash());
// app.use(isLoggedIn());

/* ============================================================================ */

/* Routes====================================================================== */
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const { googleId } = req.user;
    isAccCreated(googleId).then((acc) => {
      if (acc) {
        res.redirect('/');
      } else {
        res.redirect('/signUp');
      }
    }).catch((err) => {
      console.log(err, 'user info is not stored yet');
    });
  });

app.post('/addUserInfo', (req, res) => {
  const userInfoObj = req.body;
  const userId = req.session.passport.user;
  addUser(userId, userInfoObj).then((result) => {
    res.send(console.log('successful update to user row'));
  }).catch((err) => {
    res.send(console.log('unsucessful update to user row', err));
  });
});

app.get('*', (req, res) => {
  res.sendFile(`${CLIENT_PATH}/index.html`);
});

app.get('/dogs', (req, res) => {
  res.render('/dogs');
});

app.get('/users', (req, res) => {
  getUsers()
    .then((list) => res.send(list))
    .catch((err) => res.status(500).send(err));
});

app.post('/friends', (req, res) => {
  const {
    name, friendName, bool,
  } = req.body;
  addFriend(name, friendName, bool)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

app.get('/logoutt', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/login');
});

app.get('/session', (req, res) => {
  res.send(req.user);
});

/* ============================================================================ */

/* Starting server */
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
