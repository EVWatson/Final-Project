const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.use(express.json());


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
  // console.log(typeof(id))
  const user = User.findOne({ _id: id})
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
});


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


//create a new booking by user
getUserObj = (booked_by) => {
  const user = User.findById(booked_by)
    .then(doc => {
      return doc
    })
  console.log(user);
  return user
}

router.post('/booking/create', (req, res) => {
  const { day, location, time, duration, instrument, booked_by } = req.body
    const user = getUserObj(booked_by)
      .then((booked_by) => {
        const booking = new Booking ({
          day,
          location,
          time,
          duration,
          instrument,
          booked_by
        });
        booking.save()
          .then((doc) => {
            console.log(doc)
            res.send(doc)
          })
      })
})

//get booking object based on userid 
// router.get('/booking/getuserbooking', (req, res) => {
router.get('/booking/:userId', (req, res) => {

  const { userId } = req.params;
  
  //find the latest record
  Booking.findOne({ booked_by: userId}).sort({ field: 'asc', _id: -1 })
  // Booking.findOne({ booked_by: studentid})
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
});


module.exports = router;

