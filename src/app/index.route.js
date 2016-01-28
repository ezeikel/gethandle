export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('searching', {
      url: '/search',
      //templateUrl: 'app/main/main.html',
      controller: 'SearchController',
      controllerAs: 'search'
    });

  $urlRouterProvider.otherwise('/');
}
