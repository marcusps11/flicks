var Bar = require('../models/Bar');

var fourSquare = require('four-square') 

var config = {
  'secrets' : {
    'clientId' : 'L2JDZSJKC3VZNBWSDNWRIWB2SHEEAZTCCVT0LOTU3SPHW1WL',
    'clientSecret' : 'NGMYVD3T4A0YSFPOSJWRG0K2O3KUXNZUBVVOL2LIEDQXE1EL',
    'redirectUrl' : 'http://localhost:3000'
  }
}

var foursquare = require('node-foursquare')(config);

