angular
.module('YelpsApp')
.controller('barsController', BarsController);

BarsController.$inject = ['$scope', '$http', '$state', '$stateParams', '$window']

function BarsController($scope, $http, $state, $stateParams, $window){
  var self = this;

  self.all = [];
  self.newBar = {};

  self.search = function(term, location){
    console.log("Searching...");

    $state.go("search", { term: term, location: location })
  }

  function setupTinder(){
    console.log("Setting up tinder...");

    angular.element("#tinderslide").jTinder({
      onDislike: function (item) {
        angular.element('#status').html('Dislike image ' + (item.index()+1));
      },
      onLike: function (item) {
        angular.element('#status').html('Like image ' + (item.index()+1));
      },
      animationRevertSpeed: 200,
      animationSpeed: 400,
      threshold: 1,
      likeSelector: '.like',
      dislikeSelector: '.dislike'
    });

    angular.element('.actions .like, .actions .dislike').on('click', function(e){
      e.preventDefault();
      angular.element("#tinderslide").jTinder(angular.element(this).attr('class'));
    });
  }

  self.getBars = function(term, location){
    console.log(term, location)

    $http
    .get("https://calm-brook-1305.herokuapp.com/api/&?term="+term+"&location="+location) 
    .then(function(response){


      angular.forEach(response.data.businesses, function(business, index) {
        business.image_url = business.image_url.replace("ms.jpg", "o.jpg");
        self.all.push(business);
        
        // Cannot work unless ng-repeat works
        // setTimeout(setupTinder, 500)
      })
    });
  }

  if ($stateParams.term && $stateParams.location) self.getBars($stateParams.term, $stateParams.location);

  // Listening to custom directive that fires when ng-repeat has finished
  $scope.$on('ngRepeatFinished', setupTinder);

}
