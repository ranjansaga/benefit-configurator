const app = angular.module('benefitConfigurator', []);

app.controller('MainCtrl', function ($scope, $http) {

    // Get the product records from json file
    $http.get('Product.json').then(function (response) {
      $scope.productsList = response.data.records
    });

    // Initialize an array to store all coverages for
    // a product
    $scope.coverageList = [];
    $scope.showCoverageSection = false;

    // Get all coverages for a product.
    $scope.getCoveragesForProduct = function (productId) {
      let product = $scope.productsList.find(product => product.Id === productId)
      $scope.coverageList = product.coverages.records;
      $scope.showCoverageSection = true;
      $scope.activeProduct = product;

      // Prepare an array of random colors for coverage item icons
      $scope.randomColorsList = $scope.coverageList.map(function () {
        return ('#' + Math.floor(Math.random() * 16777215).toString(16));
      });
    };

    // This function gets all the attribute categories of the 
    // coverage clicked.
    $scope.getAttributeCategoriesForCoverage = function (coverageObj) {
      if (coverageObj.coverage &&
        coverageObj.coverage.attributeCategories) {
        $scope.attributeCategoriesList = coverageObj.coverage.attributeCategories.records;
      }
    }
});