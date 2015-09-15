angular
.module('YelpsApp')
.factory('User', User);

User.$inject = ['$resource'];
function User($resource) {
  var url = 'http://localhost:3000/api'

  return $resource(
      url+'/users/:id',
      {id: '@id'},
      { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: true},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
      'authorize':   { url: url + '/authorize', method: 'POST'},
      'signup': { url: url + '/signup', method: 'POST'}
    }
    );
  }