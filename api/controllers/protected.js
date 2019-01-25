const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const User = require('../models/User');
const Booking = require('../models/Booking')

// End point for fetching all users
router.get('/users', (req, res) => {
  User.find({})
    .then(docs => res.send(docs))
    .catch(err => res.send(err));
});


router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log(typeof(id))
  const user = User.findOne({ _id: id})
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
});


//Taylor - begin
//endpoint for new booking - gonna need to bind this into a form once we have the react side up and running
router.get('/bookings', (req, res) => {
  Bookings.find({})
    .then(docs => res.send(docs))
    .catch(err => res.send(err))
})

router.post('/bookings/new', (req, res) => {
  const {
          term,
          week,
          day,
          block_start,
          block_end,
          approval_pending,
          booked_by,
          location,
          instrument
  } = req.body;

  const booking = new Booking({
          term,
          week,
          day,
          block_start,
          block_end,
          approval_pending,
          booked_by,
          location,
          instrument
  });

  booking.save()
    .then(res.send(booking));
});
//Taylor End

module.exports = router;
