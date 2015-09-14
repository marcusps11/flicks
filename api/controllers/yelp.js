var Bar = require('../models/Bar');

var oauthSignature = require('oauth-signature');  
var nonce = require('nonce')();  
var request = require('request');  
var querystring = require('querystring');  
var _ = require('lodash');


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = (position.coords.latitude)
    var lng = (position.coords.longitude)
    console.log(lat) 
    console.log(lng);  
}

var requestYelp = function(req, res) {

  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var default_parameters = {
    sort: '2'
  };

  /* We set our secrets here */
  var consumerSecret = process.env.YELP_CONSUMER_SECRET;
  var tokenSecret = process.env.YELP_TOKEN_SECRET;
  var consumerKey = process.env.YELP_CONSUMER_KEY;
  var token = process.env.YELP_TOKEN;

  console.log(consumerSecret, tokenSecret, consumerKey, token)

  var set_parameters = {
    term: req.query.term,
    location: req.query.location
  }

  console.log(set_parameters)

  /* We set the require parameters here */
  var required_parameters = {
    oauth_consumer_key : consumerKey,
    oauth_token : token,
    oauth_nonce : nonce(),
    oauth_timestamp : nonce().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  console.log(nonce().toString().substr(0,10))

  /* We combine all the parameters in order of importance */ 
  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
console.log(signature);

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature;

  /* Then we turn the paramters object, to a query string */
  var paramURL = querystring.stringify(parameters);

  /* Add the query string to the url */
  var apiURL = url+'?'+paramURL;
console.log(apiURL)

  /* Then we use request to send make the API Request */
  request(apiURL, function(error, response, body){
    // console.log(response)
    // return callback(error, response, body);
    res.send(body);
  });

};


module.exports = {
  requestYelp : requestYelp
}
