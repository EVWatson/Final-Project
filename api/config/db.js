const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB_URL}`, { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log("Connected to Mongod"));
mongoose.connection.on('error', () => console.log("Failed to connect to Mongod"));

require('dotenv').config();
