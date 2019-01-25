const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
require('./config/db');

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(require('./controllers'));


app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
