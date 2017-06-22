require('angular');
require('angular-route');
require('angular-animate');
require('angular-touch');
require('angular-ui-bootstrap');
require('angular-material');

var HomeController = require('./components/home/homeController');
var HomeService = require('./components/home/homeService');

var AboutController = require('./components/about/aboutController');

var routes = require('./app.routes.js');

var testDirective = require('./directives/test/testDirective');

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMaterial'])

.service('homeService', HomeService)

.controller('homeController', ['$scope', '$routeParams', '$http', 'homeService', HomeController])
.controller('aboutController', ['$scope', AboutController])

.directive('test', testDirective)

.config(routes);
