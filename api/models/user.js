var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
  full_name: {type: String, required: true },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true },
  liked: [{
    liked: {type: Boolean, default:null},
    location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location'}
  }]
})

UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model("User", UserSchema);
module.exports = User;