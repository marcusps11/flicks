var express    = require('express');
var app        = express();
var morgan     = require('morgan');
var path       = require('path');
var cors       = require('cors');
var expressJWT = require("express-jwt");
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var passport   = require('passport');
var config     = require('./config/config');

// Setup Express Middleware
var port = process.env.PORT || 3000; 


app.use(express.static("public"));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Setup mongoose connection

var databaseURL = process.env.MONGOLAB_URI || 'mongodb://localhost/nextroom';
mongoose.connect(databaseURL); 


// Require passport and pass in package
require('./config/passport')(passport);

// Secret for jwt
var secret     = config.secret;

// Setup page to render index.html BEFORE jwt security
app.get("/", function(req, res){
  console.log("HERE");
  res.render("index.html");
});

// JWT access control. Important to have these before our routes!
// app
//   .use('/api', expressJWT({secret: config.secret})
//   .unless({path: ['/api/auth/login', '/api/auth/signup']}));

// // Handle "No authorization token was found" errors
// app.use(function (error, request, response, next) {
//   if (error.name === 'UnauthorizedError') {
//     response.status(401).json({message: 'You need an authorization token to view this.'});
//   }
// });

app.use(express.static(__dirname + '/public'));
// Require routes
var routes  = require('./config/routes');

// Prefix API paths
app.use('/api', routes);


app.listen(port, function(){
  console.log('listening on port 3000')
});