const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const User = require('../models/User');
const Booking = require('../models/Booking')
const Bio = require('../models/Bio')
const Location = require('../models/Location')

router.get('/', (req, res) => {
  res.send('hi from api');
});

//new user registration
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
                      return res.send(doc)
                  })
            })
          }
        })
    } else {
      return res.status(406).send("Please enter username and password")
    }
});

module.exports = router;
