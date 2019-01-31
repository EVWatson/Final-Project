const mongoose = require('mongoose');
const schema = mongoose.Schema;

  const adminSchema = new schema({
     username: String,
     password: String,
     email: String,
     address: String,
     admin: Boolean
  });

module.exports = mongoose.model('admins', adminSchema);

