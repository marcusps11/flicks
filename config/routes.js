var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var yelpController = require('../controllers/yelp');
var usersController = require('../controllers/usersController')
var authenticationController = require('../controllers/authenticationController')

router.post('/auth/login', authenticationController.login);
router.post('/auth/signup', authenticationController.signup);


// router.route('/bars')
// .get(BarsController.getBars)

router.route('/:search')
.get(yelpController.requestYelp)

router.route('/users')
.get(usersController.indexUsers)
.post(usersController.createUser)

// router.route('/users/:id')
// .get(usersController.checkUser)
// .post(usersController.updateUser)
// .delete(usersController.deleteUser)

// router.route('/login')
// .post(authenticationController.login);

// router.route('/signup')
// .post(authenticationController.signup);


// router.route('/')

module.exports = router