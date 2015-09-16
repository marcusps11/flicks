module.controller('UsersController', UsersController);

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
    User.login(self.user, showMessage);
    $state.go('categories')
  } 


  self.logout= function(){
    TokenService.removeToken && TokenService.removeToken();
    $state.go('home')
  }

  self.signup = function(){
    User.signup(self.user, showMessage)
  }

  self.isLoggedIn = function() {
    return TokenService.isLoggedIn ? TokenService.isLoggedIn() : false;
  }


  return self 

}


