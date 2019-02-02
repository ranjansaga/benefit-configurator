const app = angular.module('benefitConfigurator', []);

app.controller('MainCtrl', function ($scope, $http) {

    $scope.name="ranjan";

    $http.get('Product.json').then(function (response) {
        $scope.data = response.data;
        console.log('data-->', $scope.data);
    });

});
