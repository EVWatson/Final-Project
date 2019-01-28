const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bioSchema = new schema({
      photo: String,
      about: String,
      qualifications: String,
      teachingPhilosophy: String,
      lessons: String,
      ratesPayment: String,
      policies: String,
      phone: String,
      email: String
})

module.exports = mongoose.model('bio', bioSchema);
