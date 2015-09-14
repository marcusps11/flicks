angular
  .module('YelpsApp')
  .controller('UsersController' UserController)

function UserController(){

  var self = this;
  self.user = {};

  self.join = function() {
    User.join(self.user);
  }
}

