angular
.module('YelpsApp')
.controller('UsersController' UserController)

UsersController.$inject = ['User', 'CurrentUser']
function UserController(User, CurrentUser){
  var self = this;

  init()

  function init(){
    self.currentUser = CurrentUser.check();

    if (self.currentUser){
      getUsers()
    }else {
      self.all = [];
      self.agent = {};
    }
  }

  function getUsers(){
    User.query(function(response){
      self.all = response;
    }
    )}

  function login(response){
    self.currentUser = CurrentUser.login(response.token)
    init()
  } 

  function logout(){
    CurrentUser.logout()
    init()
  }

  self.authorize = function(){
    user.authorize(self.user,login)
  }

  self.join = function(){
    user.join(self.user, login)
  }    

  }

