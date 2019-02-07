const express = require('express');
const router = express.Router();
const cors  = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');


const User = require('../models/User');

const authenticateUser = (req, res, next) => {
  console.log('authenticating')
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

router.post('/users/new', (req, res) => {

  const {
    role,
    username,
    password,
    email,
    student_first_name,
    student_last_name,
    student_dob,
    student_gender,
    parent_first_name,
    parent_last_name,
    primary_contact_first_name,
    primary_contact_last_name,
    primary_contact_number,
    address,
    primary_instrument,
    primary_learning_location,
    experience,
    currently_enrolled:{enrolled, day, time},
  } = req.body;


    const saltRounds = 10;

    if(username && password) {
      User.findOne({ username })
        .then(doc => {
          if(doc) {
            console.log('user taken')
            return res.status(418).send("Username taken")
          } else {
            console.log("here")
            bcrypt.hash(password, saltRounds, function(err, hash) {
              const user = new User({
                role,
                username,
                password: hash,
                email,
                student_first_name,
                student_last_name,
                student_dob,
                student_gender,
                parent_first_name,
                parent_last_name,
                primary_contact_first_name,
                primary_contact_last_name,
                primary_contact_number,
                address,
                primary_instrument,
                primary_learning_location,
                experience,
                currently_enrolled:{enrolled, day, time},
              })

              user.save()
                  .then(doc => {
                      console.log(doc.primary_learning_location)
                      console.log(`${doc} saved`)
                      req.login(doc, () => {
                        return res.send(doc)
                      })

                  })
            })
          }
        })
    } else {
      return res.status(406).send("Please enter username and password")
    }
});

module.exports = router
