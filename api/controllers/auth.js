const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  User.findOne({ username })
    .then(doc => done(null, doc))
    .catch(err => done({myError: err}, null));
});

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Incorrect username' }); }
      if (user.password !== password) { return done(null, false, { message: 'Incorrect password' }); }
      done(null, user);
    });
  }
))

const isAuthenticated = (req, res, next) => {
  if(!req.user) {
    return res.status(403).send('Not authorized!');
  }
  next();
};

const authenticateUser = (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (err) {return next(err)}
    if (!user) {return res.status(401).send(info.message)}
    req.logIn(user, (err) => {
      if (err) {return next(err)}
      return res.send('Successfully Authenticated');
    })
  }) (req, res, next);
}


app.post('/login', authenticateUser);








module.exports = router;
