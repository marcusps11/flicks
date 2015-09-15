var mongoose = require('mongoose');

var barSchema = mongoose.Schema({
  name:String,
 
})

module.exports = mongoose.model('Bar', barSchema)