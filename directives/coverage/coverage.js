angular.module('benefitConfigurator')
.directive("coverage", function() {
  return {
    restrict: 'E',
    scope: false,
    templateUrl: "directives/coverage/coverage.html",
    link: function ($scope) {

      // This function gets the icon for coverage section
      $scope.getCoverageIconText = function (name) {
        return name.slice(0, 2);
      }
    }
  };
});