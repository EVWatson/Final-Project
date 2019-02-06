const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

// require('dotenv').config();


const authenticateUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => { 
    if (err) { 
      return next(err); 
    }
    if (!user) {
      return res.status(401).send(info.message); 
    }     
    req.login(user, next)
    res.send(user)
  })(req, res, next);
}

const isAuthenticated = (req, res, next) => {
  if(!req.user) {
    return res.status(403).send('Not authorized!');
  }
  next();
};

router.post('/login', authenticateUser)



router.get('/logout', (req, res) => {
  req.logout();
  res.send('Successfully logged out');
});


router.get('/me', isAuthenticated, (req, res) => {
  res.send(req.user)
});


module.exports = router

