const mysql = require('mysql');

const pool = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'puppy_love',
});

pool.connect((err) => {
  if (err) {
    console.error('Database Error: ', err);
  } else {
    console.log('Connecting to database');
  }
});

module.exports = pool;
