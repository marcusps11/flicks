var module = angular
.module('YelpsApp', ['ngResource', 'angular-jwt','ui.router'])
.constant('API', 'http://localhost:3000/api') 
.config(YelpsInit);

YelpsInit.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];
function YelpsInit($httpProvider, $stateProvider, $urlRouterProvider){
  $httpProvider.interceptors.push("AuthInterceptor");

  MainRouter($stateProvider, $urlRouterProvider) 
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('signup',{
    url: '/signup',
    templateUrl: '../public/templates/homepage/signup.html'
  })
  .state('login',{
    url:'/login',
    templateUrl: '../public/templates/homepage/login.html'
  })
  .state('homepage',{
    url:'/yelp',
    templateUrl: '../public/templates/homepage/home.html'
  })
  .state('logout',{
    url:'/logout',
    templateUrl: '../public/templates/homepage/logout.html'
  })
  ;
  
  $urlRouterProvider.otherwise('/');
}

