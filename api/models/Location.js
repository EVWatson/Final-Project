const mongoose = require('mongoose');
const schema = mongoose.Schema;

const locationSchema = new schema({
      name: String,
      address: String
})

module.exports = mongoose.model('location', locationSchema);
