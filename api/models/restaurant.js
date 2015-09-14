var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Restaurant', restaurantSchema);