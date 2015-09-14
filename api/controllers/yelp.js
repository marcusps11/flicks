var Bar = require('../models/Bar');

var oauthSignature = require('oauth-signature');  
var nonce = require('nonce')();  
var request = require('request');  
var querystring = require('querystring');  
var _ = require('lodash');

// var base_url = 'http://api.yelp.com/v2/';

// var yelpConsumerKey = 'E_qfI8z3LgVcQCRVJ8Yq_w';
// var yelpConsumerSecret ='737p70Zg5Z6k5FDLqxWmQO01F6o';
// var yelpToken = 'GDIOhdTkiGXmgtOqx1e-A2eDwAZM35lb';
// var yelpTokenSecret = 'UzMtmyGZxiJ4nMvAgMxsuwZW62Y';


// // Function for the yelp search callbac

// module.exports.search(params, callback){
//   var httpMethod = 'Get'
//   var url = base_url + 'search'

//   requestYelp(httpMethod, url, params, callback)
// };

// function requestYelp(method, apiUrl, params, callback){
//   var required_params = {
//    oauth_consumer_key : yelpConsumerKey,
//    oauth_token : yelpToken,
//    oauth_nonce : nonce(),
//    oauth_timestamp : nonce().toString().substr(0,10),
//    oauth_signature_method : 'HMAC-SHA1',
//    oauth_version : '1.0'
//  };

//  var parameters = _.assign(params, required_params);
//  var consumerSecret = yelpConsumerSecret;
//  var tokenSecret = yelpTokenSecret;
//  var signature = oauthSignature.generate(method, apiUrl, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

//  parameters.oauth_signature = signature;

//  var paramURL = qs.stringify(parameters);
//  var apiURL = apiUrl + '?' + paramURL;

//  request(apiURL, function(error, response, body){
//   return callback(error, response,body)
//  })

// } 

var requestYelp = function(req, res) {

  /* The type of request */
  var httpMethod = 'GET';

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search';

  /* We can setup default parameters here */
  var default_parameters = {
    location: 'London',
    sort: '2'
  };

  /* We set our secrets here */
  var consumerSecret = process.env.YELP_CONSUMER_SECRET;
  var tokenSecret = process.env.YELP_TOKEN_SECRET;
  var consumerKey = process.env.YELP_CONSUMER_KEY;
  var token = process.env.YELP_TOKEN;

  console.log(consumerSecret, tokenSecret, consumerKey, token)

  var set_parameters = {
    term: req.query.term
  }

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
