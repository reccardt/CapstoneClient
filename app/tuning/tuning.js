'use strict';

angular.module('paulApp.tuning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tuning', {
    templateUrl: 'tuning/tuning.html',
    controller: 'TuningCtrl'
  });
}])

.controller('TuningCtrl', [function() {

}]);
