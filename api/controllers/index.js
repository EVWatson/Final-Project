const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

router.use('/', require('./public'));

router.use('/auth', require('./auth'));

router.use('/protected', require('./protected'));


module.exports = router;
