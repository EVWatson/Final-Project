const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');




// End point for fetching all users
app.get('/users', (req, res) => {
  User.find({})
    .then(docs => res.send(docs))
    .catch(err => res.send(err));
});


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





module.exports = router;
