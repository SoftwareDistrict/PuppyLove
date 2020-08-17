const { Op } = require('sequelize');
const {
  User, Dog, FriendJoint, Location,
} = require('./db/db.js');

const isAccCreated = (googleId) => User.findAll({
  where: {
    [Op.and]: [{ googleId }, { username: { [Op.not]: null } }],
  },
})
  .then((list) => !!list.length)
  .catch((err) => err);

const getUsers = () => User.findAll();

const getDogs = () => Dog.findAll();

const getCurrentDog = (userId) => Dog.findAll({ where: { id_user: userId } });

const getLocs = () => Location.findAll();

const addUser = (userId, userInfoObj) => User.update(userInfoObj, { where: { id: userId } });

const addFriend = (friendObj) => FriendJoint.create(friendObj);

const getFriends = (id) => FriendJoint.findAll({ where: { id_dog: id } });

const unFriend = (dogId, friendId, bool_friend) => {
  FriendJoint.update(bool_friend, {
    where: {
      id_dog: dogId,
      id_dogFriend: friendId,
    },
  });
};

const addDog = (dogInfo) => Dog.create(dogInfo);

const addLoc = (locObj) => Location.create(locObj);

module.exports = {
  isAccCreated,
  getUsers,
  getDogs,
  getCurrentDog,
  addUser,
  addFriend,
  getFriends,
  unFriend,
  addDog,
  addLoc,
  getLocs,
};
