'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
    console.log(response.data.records);
    $scope.myData = response.data.records;
  });
}]);