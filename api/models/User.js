const mongoose = require('mongoose');
const schema = mongoose.Schema;

  const userSchema = new schema({
     role: String,
     username: String,
     password: String,
     email: String,
     student_first_name: String,
     student_last_name: String,
     student_dob: String,
     student_gender: String,
     parent_first_name: String,
     parent_last_name: String,
     primary_contact_first_name: String,
     primary_contact_last_name: String,
     primary_contact_number: String,
     address: String,
     primary_instrument: String,
     primary_learning_location: String,
     experience: String,
     currently_enrolled: {
         enrolled: Boolean,
         day: String,
         time: String,
     }
});


module.exports = mongoose.model('users', userSchema);
