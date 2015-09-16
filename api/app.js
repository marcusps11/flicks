var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var expressJWT = require("express-jwt");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var config     = require('./config/config');

mongoose.connect('mongodb://localhost:27017/yelp-api');

require('./config/passport')(passport);

var secret     = config.secret;




app.use(cors());
app.use(morgan('dev'));
app.use (bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var routes  = require('./config/routes');


app.use('/api',routes);

app.listen(3000)