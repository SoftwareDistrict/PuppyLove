const { Op } = require('sequelize');
const { sequelize, User } = require('./db/db.js');

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
    sequelize.query(addQuery, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('inserted friend');
      }
    });
  });
};

const isAccCreated = (googleId) => User.findAll({
  where: {
    [Op.and]: [{ googleId }, { username: { [Op.not]: null } }],
  },
}).then((list) => {
  console.log(list);
  return !!list.length;
}).catch((err) => err)






// const getQuery = `SELECT * FROM users WHERE googleId = "${googleId}" AND username IS NOT NULL`;
// const getQuery = `SELECT * FROM users WHERE googleId = ${googleId} AND username IS NOT NULL & cell IS NOT NULL `;
// const getQ = `SELECT * FROM USER WHERE googleId = ${googleId} AND WHERE coalesce(username, email, cell, latitude, longitude, home_town, pref_breed, pref_age_min, pref_age_max, pref_fixed, distance, googleId) IS NOT NULL`;
// return new Promise((resolve, reject) => {
//   sequelize.query(getQuery, (err, list) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(list);
//     }
//   });
// });
// ;
const addUser = (userId, userInfoObj) => {
  console.log(userId);
  console.log(userInfoObj, 'userInfoObj line 70');
  return User.update(userInfoObj, { where: { id: userId } });
//     .success((result) => {
//       console.log('succesful update', result);
//     })
//     .error((err) => {
//       console.log(err, 'unsucessful update line 76');
//     });
};


// const addDog = (name, friendName, bool) => {
//   const addQuery = `INSERT INTO friend_joint (id_dog, id_dogFriend, bool_friend) VALUES ((SELECT id FROM dog WHERE name = "${name}"), (SELECT id FROM dog WHERE name = "${friendName}"), "${bool}"`;
//   return new Promise((resolve, reject) => {
//     pool.query(addQuery, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve('inserted friend');
//       }
//     });
//   });
// };

module.exports = {
  getUsers,
  getDogs,
  addFriend,
  isAccCreated,
  addUser,
};
