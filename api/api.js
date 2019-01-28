const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
require('./config/db');

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(require('./controllers'));
app.use(cors());


app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
