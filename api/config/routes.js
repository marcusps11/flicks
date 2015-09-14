var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var barsController = require('../controllers/bars');
var yelpController = require('../controllers/yelp');


// router.route('/bars')
// .get(BarsController.getBars)

router.route('/:search')
.get(yelpController.requestYelp)

// router.route('/')

module.exports = router