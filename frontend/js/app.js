angular.module('YelpsApp', ['ngResource' ,'angular-jwt']);

angular
  .module('YelpsApp')
  .run(function($http, $window){
    var token = $window.localStorage.getItem('token')
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  })