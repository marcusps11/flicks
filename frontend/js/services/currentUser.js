module
  .factory('CurrentUser', CurrentUser);

CurrentUser.$inject = ['$window', 'jwtHelper'];

function CurrentUser($window, jwtHelper){
  function check(){
    var token = $window.localStorage.getItem('token', token)
    if (token) return login (token);
  }

  function login(token){
    var user = jwtHelper.decodeToken(token);

    if (user) {
      $window.localStorage.setItem('token', token)
      return user;
    } else {
      return false;
    }
  }

  function logout(){
    $window.localStorage.removeItem('token')
  }

  return {
    check: check,
    login: login,
    logout: logout
  }
}