require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const pool = require('./db/db.js');
const pass = require('./passport/passport');
// const data = require('../data.json');
const { getUsers, getDogs, addFriend } = require('./queries.js');

const PORT = process.env.PORT || 3000;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

const app = express();

/* Middleware================================================================== */

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}
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
// app.use(isLoggedIn());

/* ============================================================================ */

/* Routes====================================================================== */
app.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/dogs', (req, res) => {
  getDogs()
    .then((list) => res.send(list))
    .catch((err) => res.status(500).send(err));
});

app.get('/users', (req, res) => {
  getUsers()
    .then((list) => res.send(list))
    .catch((err) => res.status(500).send(err));
});

app.post('/friends', (req, res) => {
  console.log(req.body);
  const {
    name, friendName, bool,
  } = req.body;
  addFriend(name, friendName, bool)
    .then(() => {
      console.log('Added This Friend');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err, 'no friend added.');
      res.sendStatus(500);
    });
});

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/login');
});

/* ============================================================================ */

/* Starting server */
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});