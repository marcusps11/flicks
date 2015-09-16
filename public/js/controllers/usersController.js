angular
  .module('YelpsApp')
.controller('UsersController', UsersController)

UsersController.$inject = ['User','TokenService', '$state'];

function UsersController(User, TokenService, $state){
  var self = this;

  self.all = [];
  self.user = {};

  function showMessage(res){
    // self.CurrentUser = CurrentUser.check();
    var token = res.token ? res.token : null;

    if(token) { console.log(res); }
    self.message =  res.message ? res.message : null;
  }

  self.getUsers = function(){ 
    self.all = User.query();
  }

  self.login = function(res){
    User.login(self.user, showMessage)
    $state.go('search');
  } 


  self.logout = function(){
    console.log('lllllllllllllll')
    TokenService.removeToken && TokenService.removeToken();
    $state.go('home');
  }

  self.signup = function(){
    User.signup(self.user, showMessage)
  }

  self.isLoggedIn = function() {
    console.log('I am logged in')
    return TokenService.isLoggedIn ? TokenService.isLoggedIn() : false;
  }

  return self 

}


