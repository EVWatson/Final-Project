const mongoose = require('mongoose');
const schema = mongoose.Schema;

const scheduleSchema = new schema({
      day: String,
      location: String,
      time: String,
      duration:  Number,
      instrument: String,
      booked_by: {type: 'ObjectId', ref: 'User'}

})

module.exports = mongoose.model('schedule', scheduleSchema);
