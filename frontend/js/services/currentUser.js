angular 
.module('YelpsApp')
.factory('CurrentUser', CurrentUser);

CurrentUser.$inject = ['$window', 'jwthelper']
function CurrentUser($window, jwthelper){

  function check(){
    var token = $window.localStorage.getItem('token', token)
    if (token) return login(token)
  } 

function login(token){
  var user = jwthelper.decodeToken(token)

  if (user){
    $window.localStorage.setItem('token', token)
    return user;
  }else {
    return false
  }
}

function logout(){
  $window.localStorage.removeItem('token')
}

return{
  check:check,
  login: login,
  logout: logout
}
}