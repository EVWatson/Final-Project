const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

app.use(cors({
  credentials: true,
  origin: process.env.REQUEST_ORIGIN
  // origin: "http://localhost:3000"
}));

require('dotenv').config();
require('./config/db');
const User = require('./models/User');
const Admin = require('./models/Admin');
const port = process.env.PORT || 5001;

app.use(express.json());


//1. Sessions for users
const oneDay = 1000 * 60 * 60 *24;

const cookie = cookieSession({
  maxAge: oneDay,
  keys: [process.env.COOKIE_KEY]
})


app.use(cookie);
//2. Initialize passport
app.use(passport.initialize());
app.use(passport.session());


//3 . Tell passport how to serialize and deserialize users
passport.serializeUser((user, done) => {
  done(null, user.username);
});


passport.deserializeUser((username, done) => {
  User.findOne({ username })
  .then(doc => done(null, doc))
  .catch(err => done({myError: err}, null));
});


//4. Tell passport how to authenticate using local strategy
passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }

      bcrypt.compare(password, user.password, function(err, resp){
        if(!resp){
          return done(null, false, { message: 'Incorrect password' });
        } else {
          done(null, user);
        }
      })
    });
  }
))


app.use(require('./controllers'));

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
