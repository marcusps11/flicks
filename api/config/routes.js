var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var barsController = require('../controllers/bars');
var yelpController = require('../controllers/yelp');
var usersController = require('../controllers/usersController')
var authenticationController = require('../controllers/authenticationController')


// router.route('/bars')
// .get(BarsController.getBars)

router.route('/:search')
.get(yelpController.requestYelp)

router.route('/users')
.get(usersController.indexUsers)
.post(usersController.createUser)

router.route('/login')
.post(authenticationController.logIn);

router.route('/signup')
.post(authenticationController.signUp);


// router.route('/')

module.exports = router