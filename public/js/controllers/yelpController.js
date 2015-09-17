angular
.module('YelpsApp')
.controller('barsController', BarsController);

BarsController.$inject = ['$http', '$state', '$window', '$scope']

function BarsController($http, $state, $window, $scope){
  var self = this;

  self.all = [];
  self.newBar = {};

  function setupTinder(){
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
    console.log(location)

    $http
    .get("http://localhost:3000/api/&?term="+term+"&location="+location) 
    .then(function(response){

      console.log(response.data.businesses[0])

      angular.forEach(response.data.businesses, function(business, index) {
        business.image_url = business.image_url.replace("ms.jpg", "o.jpg");
        self.all.push(business);
        
        // Cannot work unless ng-repeat works
        // setTimeout(setupTinder, 500)
      })
    });
  }

  // Listening to custom directive that fires when ng-repeat has finished
  $scope.$on('ngRepeatFinished', setupTinder);
}
