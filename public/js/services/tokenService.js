angular
.module('YelpsApp')
.service('TokenService', TokenService)

TokenService.$inject = ['$window' , 'jwtHelper']
function TokenService($window, jwtHelper) {

  var self = this;

  self.parseJwt = function() {
    var token = self.getToken();
    return jwtHelper.decodeToken(token);
  }

  self.saveToken = function(token) {
    $window.localStorage['secret'] = token;
    console.log(token)
  }

  self.getToken = function() {
    console.log(token)
    return $window.localStorage['secret'];
    
  }

  self.removeToken = function() {
    $window.localStorage.removeItem('secret');
  }

  self.isLoggedIn = function() {
    var token = self.getToken();

    if (token) {
      return true;
    } else {
      return false;
    }
  }

}
