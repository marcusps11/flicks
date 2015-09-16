angular
.module('YelpsApp')
.factory('AuthInterceptor', AuthInterceptor)

AuthInterceptor.$inject = ["API", "TokenService"];
function AuthInterceptor(API, TokenService) {

  console.log("SUUUP")

  return {
    request: function(config) {
      var token = TokenService.getToken();
      console.log("I got a token, AuthInterceptor ", token)

      if (config.url.indexOf(API) === 0 && token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    response: function(res) { 
      if (res.config.url.indexOf(API) === 0 && res.data.token) {
        console.log("GRERREERR", res.data.token)
        TokenService.saveToken(res.data.token); 
      } 
      return res; 
    }
  }
}

