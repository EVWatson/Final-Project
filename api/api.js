const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');
require('dotenv').config();
require('./config/db');

const app = express();
const port = process.env.PORT || 5001;

mongoose.connect(`${process.env.DB_URL}`, { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log("Connected to Mongod"));
mongoose.connection.on('error', () => console.log("Failed to connect to Mongod"));

app.use(express.json());
app.use(require('./controllers'));





app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
