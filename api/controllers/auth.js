const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Admin = require('../models/Admin');


//1. Sessions for users
const oneDay = 1000 * 60 * 60 *24;

const cookie = cookieSession({
  maxAge: oneDay, 
  keys: ['secret-key'] 
})


router.use(cookie); 
//2. Initialize passport
router.use(passport.initialize());
router.use(passport.session());
router.use(express.json());


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
  
const isAuthenticated = (req, res, next) => {
    if(!req.user) {
    return res.status(403).send('Not authorized!');
  }
  next();
};

 
const authenticateUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => { 
    if (err) { 
      return next(err); 
    }
    if (!user) {
      return res.status(401).send(info.message); 
    }     
    req.login(user, (err) => {
      if (err) {
        return next(err);  
      }
      return res.send(user);
    })
  })(req, res, next);
}


router.post('/login', authenticateUser);


router.get('/logout', (req, res) => {
  req.logout();
  res.send('Successfully logged out');
});


router.get('/me', isAuthenticated, (req, res) => {
  res.send(req.user)
});


module.exports = router;

