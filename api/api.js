const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;


const users = [
        {
            id: 1,
            name: "first and last",
            date_of_birth: "date",
            parent_name: "parent name",
            primary_contact_name: "name",
            primary_contact_number: "number",
            address: "address",
            email: "email",
            primary_instrument: "primary instrument",
            primary_learning_location: "location",
            experience: "current level",
            currently_enrolled: {
                enrolled: false,
                day: "monday",
                time: "1630"
            },
            gender: "male",
            role: "admin "
        },
        {
            id: 2,
            name: "first and last",
            date_of_birth: "date",
            parent_name: "parent name",
            primary_contact_name: "name",
            primary_contact_number: "number",
            address: "address",
            email: "email",
            primary_instrument: "primary instrument",
            primary_learning_location: "location",
            experience: "current level",
            currently_enrolled: {
                enrolled: false,
                day: "monday",
                time: "1630"
            },
            gender: "male",
            role: "user"
        }
    ]

app.get('/', (req, res) => {
  res.send('hi from api');
})

app.get('/users', (req, res) => {
  res.send(users);
})

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
