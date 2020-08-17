require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../db/db');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, PORT } = process.env;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `http://localhost:${PORT}/google/callback`,
},
(accessToken, refreshToken, profile, done) => {
//   User.findOrCreate(potions:{ where: { googleId: profile.id } }, (err, user) => done(err, user));
  User.findOne({
    where: {
      googleId: profile.id,
    },
    raw: true,
  })
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      const newUser = {
        googleId: profile.id,
        email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
      };
      User.create(newUser)
        .then((createdUser) => {
          newUser.id = createdUser.id;
          done(null, newUser);
        })
        .catch((err) => done(err, null));
    })
    .catch((err) => done(err, null));
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  User.findById(user.id, (err, person) => {
    done(null, person);
  });
});
