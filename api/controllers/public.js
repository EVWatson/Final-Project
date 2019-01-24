const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

app.post('/users/new', (req, res) => {

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

  const user = new User({
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
    });

  user.save()
    .then(res.send(user));
});



app.get('/', (req, res) => {
  res.send('hi from api');
});






module.exports = router;
