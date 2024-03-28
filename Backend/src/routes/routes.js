var express = require('express');
var router = express.Router();

// Analytics controller
const analytics = require('../Controllers/AnalyticsController.js');
router.get('/load', analytics.loading);
router.get('/insert', analytics.insert);


module.exports = router;
