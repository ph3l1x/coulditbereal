'use strict';

angular.module('myApp', [
        'ngRoute',
        'myApp.authentication'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/authentication'
        });
}]);