var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var BarsController= require('../controllers/bars');

router.route('/bars')
.get(BarsController.getBars)

module.exports = router();