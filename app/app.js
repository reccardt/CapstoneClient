'use stricat';

// Declare app level module which depends on views, and components
angular.module('paulApp', [
  'ngRoute',
  'paulApp.home',
  'paulApp.tuning',
  'paulApp.forsale',
  'paulApp.links',
  'paulApp.contactus',
  'paulApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
