angular.module('myApp', ['ngRoute', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  // Setup our routes here
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: '../templates/home.html'
  }).when('/login', {
    templateUrl: '../templates/login.html'
  });
}]);