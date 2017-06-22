module.exports = function($scope, $routeParams, $http, homeService) {
  $scope.message = 'Big bad wolf';
  $scope.name = 'Carlos the Generals';
  $scope.num = $routeParams.num || 1;
  
  homeService.helloWorld();

  $scope.helloWorld = homeService.helloWorld;
};
