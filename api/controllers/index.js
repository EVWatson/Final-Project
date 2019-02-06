const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const cors = require('cors');



// router.use(cors());
router.use(cors({
    credentials: true,
    origin: process.env.REQUEST_ORIGIN
  }));
  
router.use('/', require('./public'));

router.use('/auth', require('./auth'));

router.use('/protected', require('./protected'));


module.exports = router;
