const mongoose = require('mongoose');
const schema = mongoose.Schema;
const user = require('./User')

const bookingSchema = new schema({
      day: String,
      location: String,
      time: String,
      duration:  Number,
      instrument: String,
      booked_by: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
})

module.exports = mongoose.model('booking', bookingSchema);



  // student_name: {type: mongoose.Schema.Types.student_first_name, ref: 'User'}
