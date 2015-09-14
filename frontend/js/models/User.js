angular
.module('YelpsApp')
.factory('User', User);

Agent.$inject = ['$resource', 'API'];
function Agent($resource, API) {
  var url = 'http://localhost:3000/api'

  return $resource(
    url+'/agents/:id',
    {id: '@id'},
    { 'get':       { method: 'GET' },
    'save':      { method: 'POST' },
    'query':     { method: 'GET', isArray: true},
    'remove':    { method: 'DELETE' },
    'delete':    { method: 'DELETE' },
    'authorize': { 
      url: url + '/authorize',
      method: 'POST' 
    }, 
    'join': {
      url: url + '/join',
      method: 'POST'
    }
  }
  );
}