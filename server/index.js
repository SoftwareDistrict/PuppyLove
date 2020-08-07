require('dotenv').config();
const express = require('express');
const path = require('path');
const pool = require('./db/db');

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
