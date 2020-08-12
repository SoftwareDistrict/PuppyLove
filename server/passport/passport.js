require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../db/db');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, PORT } = process.env;

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `http://localhost:${PORT}/google/callback` || `https://puppylove-285719.uc.r.appspot.com:${PORT}/google/callback`,
},
(accessToken, refreshToken, profile, done) => {
  User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
