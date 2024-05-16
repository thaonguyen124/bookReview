const express = require('express');
const router = express.Router();

const reviewController = require('../controller/reviewController');

router.use('/', reviewController.index);

module.exports = router;
