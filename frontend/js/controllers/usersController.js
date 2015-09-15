angular
.module('YelpsApp')
.controller('UsersController', UsersController);

UsersController.$inject = ['User', 'CurrentUser']

function UsersController(User, CurrentUser){
  var self = this;
  
  }

  init()

  function init(){
    self.CurrentUser = CurrentUser.check();

    if (self.CurrentUser){
      getUsers()
    }else {
      self.all = [];
      self.user = {};
      
  }

  function getUsers(){
    User.query(function(response){
      self.all = response;
    }
    )}

  function login(response){
    self.CurrentUser = CurrentUser.login(response.token)
    init()
  } 

  function logout(){
    CurrentUser.logout()
    init()
  }

  self.authorize = function(){
    user.authorize(self.user,showMessage)
  }

  self.signup = function(){
    user.signup(self.user, showMessage)
  }

  return self    

  }

