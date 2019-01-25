const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bookingSchema = new schema({
      term: String,
      week: String,
      day: String,
      block_start: Number,
      block_end: Number,
      approval_pending: Boolean,
      booked_by: String,
      location: String,
      instrument: String
})

module.exports = mongoose.model('bookings', bookingSchema);
