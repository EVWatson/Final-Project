const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
      name:String,
      date_of_birth: String,
      parent_name: String,
      primary_contact_name: String,
      primary_contact_number: String,
      address: String,
      email: String,
      primary_instrument: String,
      primary_learning_location: String,
      experience: String,
      currently_enrolled: {
          enrolled: Boolean,
          day: String,
          time: String,
      },
      gender: String,
      role: String
})

module.exports = mongoose.model('users', userSchema);
