angular.module('benefitConfigurator')
.directive('productAttributeDirective', function () {
  return {
    restrict: 'E',
    scope: {
      productAttribute:'='
    },
    templateUrl: "directives/product_attribute_directive/product_attribute_directive.html",
    link: function ($scope) {

      // This function is used to get the index of the default value
      // in the dropdown optionList received.
      $scope.getDefaultIndexFromValue = function (product, defaultValue, valueList) {
        let index = valueList.findIndex((option) => option.value === defaultValue)
        return index;
      };
    }
  };
});