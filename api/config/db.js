const mongoose = require('mongoose');
console.log('this file is running');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
console.log(process.env.DB_URL);
mongoose.connection.on('connected', () => console.log("Connected to Mongod"));
mongoose.connection.on('error', () => console.log("Failed to connect to Mongod"));

require('dotenv').config();
