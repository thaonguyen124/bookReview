const express = require('express');
const router = express.Router();

const siteController = require('../controller/siteController');

router.use('/', siteController.index);

module.exports = router;