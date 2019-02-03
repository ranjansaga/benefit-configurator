angular.module('benefitConfigurator')
.directive('attributeCategoryDirective', function () {
  return {
    restrict: 'E',
    scope: false,
    templateUrl: "directives/attribute_category_directive/attribute_category_directive.html",
  };
});