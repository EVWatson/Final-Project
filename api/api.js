const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
require('./config/db');

const User = require('./models/User');
const Booking = require('./models/Booking')

const app = express();
const port = process.env.PORT || 5001;

mongoose.connect(`${process.env.DB_URL}`, { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log("Connected to Mongod"));
mongoose.connection.on('error', () => console.log("Failed to connect to Mongod"));

app.use(express.json());
app.use(require('./controllers'));

//End point for new user registration
app.post('/users/new', (req, res) => {
  const {
    name,
    date_of_birth,
    parent_name,
    primary_contact_name,
    primary_contact_number,
    address,
    email,
    primary_instrument,
    primary_learning_location,
    experience,
    currently_enrolled:{enrolled, day, time},
    gender,
    role
  } = req.body;

  const user = new User({
                        name,
                        date_of_birth,
                        parent_name,
                        primary_contact_name,
                        primary_contact_number,
                        address,
                        email,
                        primary_instrument,
                        primary_learning_location,
                        experience,
                        currently_enrolled:{enrolled,  day, time},
                        gender,
                        role
                      });

  user.save()
    .then(res.send(user));
});


// End point for fetching all users
app.get('/users', (req, res) => {
  User.find({})
    .then(docs => res.send(docs))
    .catch(err => res.send(err));
});

//sherin - end

//Taylor - begin

//endpoint for new booking - gonna need to bind this into a form once we have the react side up and running

app.get('/bookings', (req, res) => {
  Bookings.find({})
    .then(docs => res.send(docs))
    .catch(err => res.send(err))
})

app.post('/bookings/new', (req, res) => {
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

app.get('/', (req, res) => {
  res.send('hi from api');
});

// app.get('/users', (req, res) => {
//   res.send(users);
// })

app.get('/users/:id', (req, res) => {
  const {id} = req.params;
  const user = users.find(user => {
    if(user.id == id){
      return res.send(user);
    }
 });
 if(!user) {
   return res.send('user does not exist');
 }
});


// app.post('/users/new', (req, res) => {
//   const {id, name, date_of_birth, parent_name, primary_contact_name, primary_contact_number, address, email, primary_instrument, primary_learning_location, experience, currently_enrolled:{enrolled, day, time}, gender, role} = req.body;
//   const user = new users
// });


app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
