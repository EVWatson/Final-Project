const mongoose = require('mongoose');
const schema = mongoose.Schema;
const User = require('./User')
//s1:true - means slot available
const mondayBookingSchema = new schema({
      day: String,
      location: String,
      time: String,
      duration:  Number,
      slots: {s0830:false,s0845:false,s0900:false,s0915:false,s0930:false,s0945:false,s1000:false,s1015:false,
        s1030:false,s1045:false,s1100:false,s1115:false,s1130:false,s1145:false,s1200:false,s1215:false,
        s1230:false,s1245:false,s1300:false,s1315:false},
      instrument: String,
      booked_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const tuesdayBookingSchema = new schema({
    day: String,
    location: String,
    time: String,
    duration:  Number,
    slots: {s0830:false,s0845:false,s0900:false,s0915:false,s0930:false,s0945:false,s1000:false,s1015:false,
        s1030:false,s1045:false,s1100:false,s1115:false,s1130:false,s1145:false,s1200:false,s1215:false,
        s1230:false,s1245:false,s1300:false,s1315:false},
    instrument: String,
    booked_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const wednesdayBookingSchema = new schema({
    day: String,
    location: String,
    time: String,
    duration:  Number,
    slots: {s0830:false,s0845:false,s0900:false,s0915:false,s0930:false,s0945:false,s1000:false,s1015:false,
        s1030:false,s1045:false,s1100:false,s1115:false,s1130:false,s1145:false,s1200:false,s1215:false,
        s1230:false,s1245:false,s1300:false,s1315:false},
    instrument: String,
    booked_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const thursdayBookingSchema = new schema({
    day: String,
    location: String,
    time: String,
    duration:  Number,
    slots: {s0830:false,s0845:false,s0900:false,s0915:false,s0930:false,s0945:false,s1000:false,s1015:false,
        s1030:false,s1045:false,s1100:false,s1115:false,s1130:false,s1145:false,s1200:false,s1215:false,
        s1230:false,s1245:false,s1300:false,s1315:false},
    instrument: String,
    booked_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const fridayBookingSchema = new schema({
    day: String,
    location: String,
    time: String,
    duration:  Number,
    slots: {s0830:false,s0845:false,s0900:false,s0915:false,s0930:false,s0945:false,s1000:false,s1015:false,
        s1030:false,s1045:false,s1100:false,s1115:false,s1130:false,s1145:false,s1200:false,s1215:false,
        s1230:false,s1245:false,s1300:false,s1315:false},
    instrument: String,
    booked_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const saturdayBookingSchema = new schema({
    day: String,
    location: String,
    time: String,
    duration:  Number,
    slots: {s0830:false,s0845:false,s0900:false,s0915:false,s0930:false,s0945:false,s1000:false,s1015:false,
        s1030:false,s1045:false,s1100:false,s1115:false,s1130:false,s1145:false,s1200:false,s1215:false,
        s1230:false,s1245:false,s1300:false,s1315:false},
    instrument: String,
    booked_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('mondaybooking', mondayBookingSchema);
module.exports = mongoose.model('tuesdaybooking', tuesdayBookingSchema);
module.exports = mongoose.model('wednesdaybooking', wednesdayBookingSchema);
module.exports = mongoose.model('thursdaybooking', thursdayBookingSchema);
module.exports = mongoose.model('fridaybooking', fridayBookingSchema);
module.exports = mongoose.model('saturdaybooking', saturdayBookingSchema);



  // student_name: {type: mongoose.Schema.Types.student_first_name, ref: 'User'}
