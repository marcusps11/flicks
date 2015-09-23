angular
.module('YelpsApp', ['ngResource', 'angular-jwt','ui.router'])
.constant('API', 'http://localhost:3000/api') 
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
  .state('homepage',{
    url:'/',
    templateUrl: './templates/homepage/home.html',
  })
  .state('logout',{
    url:'/logout',
    templateUrl: './templates/homepage/logout.html'
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
    templateUrl: '../public/templates/homepage/results.html'
  });
  
  $urlRouterProvider.otherwise('/');
}

