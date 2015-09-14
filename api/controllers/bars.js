var router = require('express').Router();
var yelper = require('./yelp.js');
var Bar = require('../models/Bar');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

