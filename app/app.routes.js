module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeController'
    })
    .when('/about', {
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'aboutController'
    })
    .when('/about/:num', {
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'aboutController'
    })
};
