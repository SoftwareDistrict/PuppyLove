const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('puppy_love', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Connection to db completed'))
  .catch((err) => console.error('Oopsies there is an error: ', err));

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cell: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  home_town: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pref_breed: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pref_age_min: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pref_age_max: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pref_fixed: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  distance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  googleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Dog = sequelize.define('Dog', {
  dog_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fixed: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.STRING,
    references: {
      model: 'user',
      key: 'id',
    },
    allowNull: false,
  },
});

const Location = sequelize.define('Location', {
  location_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Message = sequelize.define('Message', {
  user_from: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
    allowNull: false,
  },
  user_to: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
});

const FriendJoint = sequelize.define('FriendJoint', {
  id_dog: {
    type: DataTypes.INTEGER,
    references: {
      model: 'dog',
      key: 'id',
    },
    allowNull: false,
  },
  id_dogFriend: {
    type: DataTypes.INTEGER,
    references: {
      model: 'dog',
      key: 'id',
    },
    allowNull: false,
  },
  bool_friend: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
});

const FavLocationJoint = sequelize.define('FavLocationJoint', {
  id_location: {
    type: DataTypes.INTEGER,
    references: {
      model: 'location',
      key: 'id',
    },
    allowNull: false,
  },
  id_dog: {
    type: DataTypes.INTEGER,
    references: {
      model: 'dog',
      key: 'id',
    },
    allowNull: false,
  },
});

module.exports = {
  User,
  Dog,
  Location,
  Message,
  FriendJoint,
  FavLocationJoint,
};
