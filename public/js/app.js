angular
.module('YelpsApp', ['ngResource', 'angular-jwt','ui.router'])
.constant('API', 'https://calm-brook-1305.herokuapp.com/api') 
.config(YelpsInit)

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
    templateUrl: './templates/homepage/signup.html'
  })
  .state('login',{
    url:'/login',
    templateUrl: './templates/homepage/login.html'
  })
  .state('home',{
    url:'/',
    templateUrl: './templates/homepage/home.html',
  })
  .state('logout',{
    url:'/logout',
    templateUrl: './templates/homepage/profile.html'
  })
  .state('search',{
    url:'/search',
    templateUrl: './templates/homepage/search.html',
    params: {
      term: null,
      location: null
    }
  })
  .state('profile',{
    url:'/profile',
    templateUrl: './templates/homepage/profile.html'
  });
  
  $urlRouterProvider.otherwise('/');
}

