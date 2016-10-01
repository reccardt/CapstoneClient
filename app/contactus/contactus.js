'use strict';
// !!!!for Digital Ocean:
//.constant("baseURL","http://104.236.224.46:3000/")
angular.module('paulApp.contactus', ['ngRoute', 'ngResource'])
.constant("baseURL","http://localhost:3000/")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactus', {
    templateUrl: 'contactus/contactus.html',
    controller: 'ContactusCtrl'
  });
}])

.controller('ContactusCtrl', ['$scope','contactFactory', function($scope, contactFactory) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.message = "Loading ...";
      contactFactory.getContacts().query(
        function(response) {
            $scope.contacts = response;
        },
        function(response) {
            $scope.message = "Error: "+response.status + " " + response.statusText;
        });

    $scope.feedback = {
        mychannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: "",
		  tel: {}
    };

	 $scope.contactInfo = {
		  email: "",
		  telephone: "",
		  message: ""
	 };

    var channels = [{
        value: "tel",
        label: "Tel."
    }, {
        value: "Email",
        label: "Email"
    }];

    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

    $scope.sendFeedback = function () {
		  $scope.contactInfo.email = "";
		  $scope.contactInfo.telephone = "";
		  $scope.contactInfo.message = "";
        $scope.invalidChannelSelection = false;
		  $scope.contactInfo.email = $scope.feedback.email;
		  if($scope.feedback.tel.number)
				$scope.contactInfo.telephone = $scope.feedback.tel.number;
		  if($scope.feedback.comments)
				$scope.contactInfo.message = $scope.feedback.comments;
        contactFactory.getContacts().save($scope.contactInfo);
        $scope.feedback = {
            mychannel: "",
            firstName: "",
            lastName: "",
            agree: false,
            email: ""
        };
        $scope.feedback.mychannel = "";
        $scope.feedbackForm.$setPristine();
    };

}])
.service('contactFactory',  ['$resource', 'baseURL', function($resource, baseURL) {
// was a factory:
    this.getContacts = function(){
        return $resource(baseURL+"contacts/:id",null,  {'update':{method:'PUT' }});
    };
}]);
