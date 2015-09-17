angular
  .module('YelpsApp')
  .directive('renderAutoTyper', autoTyper);

autoTyper.$inject = [];

function autoTyper() {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      console.log("HERE")
      angular.element(element).typeset({
        interval: 30,
        wordDelay: 10,
        jitter: 50,
        pauseDuration: 1500,
        longPauseDuration: 2500,
        cursorColor: "#333",
        phrases: [
        "Beer", 
        "Pizza",
        "Pussy?" 
        
        ]
      });
    }
    
  }
};