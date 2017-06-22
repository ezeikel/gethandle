module.exports = function($scope, homeService) {
  $scope.message = 'Big bad wolf';
  $scope.name = 'Carlos the Generals';


  homeService.helloWorld();

  $scope.helloWorld = homeService.helloWorld;
};
