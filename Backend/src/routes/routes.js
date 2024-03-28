var express = require('express');
var router = express.Router();

// Analytics controller
const analytics = require('../Controllers/AnalyticsController.js');
router.get('/analytics', analytics.landing);


module.exports = router;
