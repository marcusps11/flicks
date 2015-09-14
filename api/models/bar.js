var mongoose = require('mongoose');

var barSchema = mongoose.Schema({
  name:String,
  location: String
})

module.exports = mongoose.model('Bar', barSchema)