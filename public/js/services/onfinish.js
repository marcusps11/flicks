angular
  .module('YelpsApp')
  .directive('onFinishRender', OnFinishRender);

OnFinishRender.$inject = ['$timeout'];
function OnFinishRender($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function () {
          scope.$emit('ngRepeatFinished');
        });
      }
    }
  }
};