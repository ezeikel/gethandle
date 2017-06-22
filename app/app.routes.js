module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeController'
    })
    .when('/:num', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeController'
    })
    .when('/about', {
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'aboutController'
    })
};
