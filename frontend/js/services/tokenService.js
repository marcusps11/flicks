module
.service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper']
function TokenService($window, $jwthelper){

  var self = this;

  self.parseJwt = function(token) {
    return jwtHelper.decodeToken(token);
  }

  self.saveToken = function(token){
    $window.localStorage['ifuckinghatetokens'] = token
  }

  self.getToken = function(){
    $window.localStorage['ifuckinghatetokens'];
  }

  self.removeToken = function() { 
    $window.localStorage.removeItem('ifuckinghatetokens');
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