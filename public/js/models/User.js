angular
  .module('YelpsApp')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  var url = 'https://calm-brook-1305.herokuapp.com/api'

  return $resource(
      url+'/users/:id',
      {id: '@id'},
      { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: true},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
      'login':   { url: url + '/auth/login', method: 'POST'},
      'signup': { url: url + '/auth/signup', method: 'POST'}
    }
    );
  }

  