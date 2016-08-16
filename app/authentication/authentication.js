'use strict';

angular.module('myApp.authentication', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/authentication', {
        templateUrl: 'authentication/authentication.html',
        controller: 'authenticationCtrl'
    });
}])
.controller('authenticationCtrl', [function() {
    
}]);