const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bookingSchema = new schema({
      day: String,
      location: String,
      time: String,
      duration:  Number,
      instrument: String,
      booked_by: {type: 'ObjectId', ref: 'User'}

})

module.exports = mongoose.model('booking', bookingSchema);