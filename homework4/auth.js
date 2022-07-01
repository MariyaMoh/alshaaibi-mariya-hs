const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID =
  '507577678887-va98ng5epsrvft3vjhn7pk1bqekr87gh.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/google/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, [profile]);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
