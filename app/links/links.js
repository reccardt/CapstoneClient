'use strict';

angular.module('paulApp.links', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/links', {
    templateUrl: 'links/links.html',
    controller: 'LinksCtrl'
  });
}])

.controller('LinksCtrl', [function() {

}]);
