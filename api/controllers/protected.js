const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const app = express();
app.use(express.json());


const User = require('../models/User');
const Booking = require('../models/Booking')
const Bio = require('../models/Bio')
const Location = require('../models/Location')

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


//Sherin begin
//Endpoints for Lillas bio which she can be edited from her dashboard. Also display on index page
//get bio info from client
router.get('/admin-bio', (req, res) => {
  const bio = Bio.findOne().sort({ field: 'asc', _id: -1 }).limit(1) // to get the latest record
      .then(doc => res.send(doc))
})


//make a new record in the collection. may not be used since we update the existing record
router.post('/admin-bio/new', (req, res) => {
    const { about, 
            qualifications, 
            teachingPhilosophy, 
            lessons, 
            ratesPayment, 
            policies, 
            phone, 
            email
    } = req.body;

    const bio = new Bio({
      about,
      qualifications,
      teachingPhilosophy,
      lessons,
      ratesPayment,
      policies,
      phone,
      email
    })

    bio.save()
      .then(res.send(bio))
})


//Update bio
router.put('/admin-bio/update', (req, res) => {
  const latestDoc = Bio.findOne().sort({ field: 'asc', _id: -1 }) //gets the latest record
  
  Bio.findOneAndUpdate(latestDoc, {$set:req.body}, {new: true}) // updates from req.body, {new:true}sends back the updated doc
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
});
    
//Location endpoints
router.get('/locations', (req, res) => {
  Location.find({})
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
})

router.post('/locations/new', (req, res) => {
  const { name, address } = req.body;
  const location = new Location ({
    name,
    address
  });

  location.save()
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
});

//add route to update and delete location


//Sherin -end

router.post('/booking/create', (req, res) => {
  const {
    day,
    location,
    time,
    duration,
    instrument,
    booked_by
        } = req.body
        // console.log(req.body);
    // User.findOne({_id: booked_by})
    // .then(doc => console.log(doc))
  const booking = new Booking ({
    day,
    location,
    time,
    duration,
    instrument,
    booked_by
  });
  // console.log(booking);
  booking.save()
    .then(doc => res.send(doc))
    .catch(err => res.send(err.response))
})

module.exports = router;
