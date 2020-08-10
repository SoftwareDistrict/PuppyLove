const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'puppy_love',
  connectionLimit: 5,
});

pool.getConnection()
  .then(() => console.log('Connecting to database'))
  .catch((err) => console.error('Database Error: ', err));

module.exports = pool;
