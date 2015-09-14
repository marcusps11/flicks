angular.module('YelpsApp')
.controller('barsController', BarsController);

BarsController.$inject = ['$http']

function BarsController($http){
  var self = this;

  self.all = [];
  self.newBar = {};

  self.getBars = function(term, location){
    console.log(location)
   $http
   .get("http://localhost:3000/api/&?term="+term+"&location="+location) 
   .then(function(response){
    self.all.push(response.data.businesses)
    console.log(response.data.businesses)
    console.log(term)
    console.log(location)

  })
 }


}

