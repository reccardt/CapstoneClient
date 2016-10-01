'use strict';
// !!!!for Digital Ocean:
//.constant("baseURL","http://104.236.224.46:3000/")
angular.module('paulApp.forsale', ['ngRoute', 'ngResource'])
.constant("baseURL","http://localhost:3000/")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forsale', {
    templateUrl: 'forsale/forsale.html',
    controller: 'ForsaleCtrl'
  });
}])

.controller('ForsaleCtrl', ['$scope','pianoFactory', function($scope, pianoFactory) {
        $scope.message = 'Contact us! JK. This is just a demo.';
	 //$scope.pianos = pianoFactory.getPianos();
    $scope.message = "Loading ...";
    pianoFactory.getPianos().query(
        function(response) {
            $scope.pianos = response;
            //$scope.showMenu = true;
        },
        function(response) {
            $scope.message = "Error: "+response.status + " " + response.statusText;
        });


    $scope.checkForSold = function(piano) {
		  piano.soldText = "";
		  if(piano.sold && piano.sold === true) {
				piano.soldText = "SOLD: ";
				var elem = document.getElementById(piano.graphic);
				elem.style["text-decoration"]="line-through";
		  }
   };
	 $scope.bigPhoto = function (theId,theText) {
	document.getElementById(theId).innerHTML = "<img src='saleimages/" + theId + "large.jpg' alt='" + theId + "' style='float: right; padding-left: 1em;' /><div style='clear: both;'/>" + theText;
};

}])
.service('pianoFactory',  ['$resource', 'baseURL', function($resource, baseURL) {
// was a factory:
    this.getPianos = function(){
        return $resource(baseURL+"pianos/:id",null,  {'update':{method:'PUT' }});
    };
}]);
