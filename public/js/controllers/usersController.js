angular
.module('YelpsApp')
.controller('UsersController', UsersController);

UsersController.$inject = ['User','TokenService', '$state']
function UsersController(User, TokenService, $state) {
  var self = this;

  self.all    = [];
  self.user  = {};

  // Function to display the message back to the User
  function showMessage(res) {
    var token = res.token ? res.token : null;
    
    // Console.log our response from the API
    if(token) { console.log(res); }
    self.message =  res.message ? res.message : null;
  }

  // self.authorize = function() {
  //   User.authorize(self.user, function(res){
  //     $state.go("home");
  //     showMessage(res)
  //   });
  // }

  self.login = function() {
    User.login(self.user, function(res){
      $state.go("homepage/home");
      showMessage(res)
    });
  }

  self.logout = function() {
    TokenService.removeToken && TokenService.removeToken();
  }

  self.isLoggedIn = function() {
    console.log('i am logged in')
    return TokenService.isLoggedIn ? TokenService.isLoggedIn() : false;
  }

  return self;
}



