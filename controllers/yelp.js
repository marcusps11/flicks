var Bar = require('../models/Bar');

var oauthSignature = require('oauth-signature');  
var nonce = require('nonce')();  
var request = require('request');  
var querystring = require('querystring');  
var _ = require('lodash');


var requestYelp = function(req, res) {

  var httpMethod = 'GET';

  var url = 'http://api.yelp.com/v2/search';

  var default_parameters = {
    sort: '2'
  };

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

  var required_parameters = {
    oauth_consumer_key : consumerKey,
    oauth_token : token,
    oauth_nonce : nonce(),
    oauth_timestamp : nonce().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  console.log(nonce().toString().substr(0,10))

  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
console.log(signature);

  parameters.oauth_signature = signature;

  var paramURL = querystring.stringify(parameters);

  var apiURL = url+'?'+paramURL;
console.log(apiURL)

  request(apiURL, function(error, response, body){
    res.send(body);
  });

};


module.exports = {
  requestYelp : requestYelp
}
