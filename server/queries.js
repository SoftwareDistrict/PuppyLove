const pool = require('./db/db.js');

const getUsers = () => {
  const getQuery = 'SELECT * FROM user';
  return new Promise((resolve, reject) => {
    pool.query(getQuery, (err, list) => {
      if (err) {
        reject(err);
      } else {
        resolve(list);
      }
    });
  });
};

const getDogs = () => {
  const getQuery = 'SELECT * FROM dog';
  return new Promise((resolve, reject) => {
    pool.query(getQuery, (err, list) => {
      if (err) {
        reject(err);
      } else {
        resolve(list);
      }
    });
  });
};

const addFriend = (name, friendName, bool) => {
  const addQuery = `INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = "${name}"), (SELECT id FROM dog WHERE name = "${friendName}"), "${bool}"`;
  return new Promise((resolve, reject) => {
    pool.query(addQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('inserted friend');
      }
    });
  });
};

module.exports = {
  getUsers,
  getDogs,
  addFriend,
};
