const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('./auth')

router.use(express.json());

const User = require('../models/User');
const Booking = require('../models/Booking')
const Bio = require('../models/Bio')
const Location = require('../models/Location')


const isAuthenticated = (req, res, next) => {
  if(!req.user) {
    return res.status(403).send('Not authorized!');
  }
  next();
};


router.use(isAuthenticated);

// End point for fetching all users
router.get('/users', (req, res) => {
  User.find({})
    .then(docs => res.send(docs))
    .catch(err => res.send(err));
});


router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  
  const user = User.findOne({ _id: id})
    .then(doc => res.send(doc))
    .catch(err => res.send(err))
});


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
    .then(doc => {
      console.log(doc)
      res.send(doc)})
    .catch(err => res.send(err))
});


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


router.post('/booking/create', (req, res) => {
  
  const { day, location, time, duration, instrument, booked_by } = req.body
      
        const booking = new Booking ({
          day,
          location,
          time,
          duration,
          instrument,
          booked_by
        });

        booking.save()
          .then((doc) => res.send(doc))      
})


//get booking object based on userid
router.get('/booking/:userId', (req, res) => {
  const { userId } = req.params;
  console.log("in api");
  //find the latest record
  Booking.findOne({ booked_by: userId}).sort({ field: 'asc', _id: -1 })
    .populate('booked_by')
    .exec((err,doc) => res.send(doc))
});


router.get('/bookings', (req, res) => {
  Booking.find({})
    .populate('booked_by')
    .exec((err,doc) => res.send(doc))
})

router.patch('/user/edit-details', (req,res) => {
  const { id } = req.body.data;
  Users.findOneAndUpdate({_id: id}, {data})
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      return res.send(err)
    })

})




module.exports = router;
