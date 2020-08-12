require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const pool = require('./db/db.js');
// const data = require('../data.json');
const { getUsers, getDogs, addFriend } = require('./queries.js');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
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
