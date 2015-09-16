module.controller('UsersController', UsersController);

UsersController.$inject = ['User','TokenService', 'CurrentUser'];

function UsersController(User, TokenService, CurrentUser){
  var self = this;

  self.all = [];
  self.user = {};

  function showMessage(res){
    self.CurrentUser = CurrentUser.check();
    var token = res.token ? res.token : null;

    if(token) { console.log(res); }
    self.message =  res.message ? res.message : null;
  }

  self.getUsers = function(){ 
    self.all = User.query();
  }

  self.login = function(res){
    User.login(self.user, showMessage);
  } 

  self.logout= function(){
    TokenService.removeToken && TokenService.removeToken();
  }

  self.signup = function(){
    User.signup(self.user, self.login)
  }

  self.isLoggedIn = function() {
    return TokenService.isLoggedIn ? TokenService.isLoggedIn() : false;
  }

  return self 

}


