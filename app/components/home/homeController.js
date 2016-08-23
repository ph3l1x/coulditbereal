(function () {
    'use strict';

    angular
        .module('HomeApp')
        .controller('HomeController', ['$scope', 'currentAuth', '$state' , HomeController]);

    function HomeController($scope, currentAuth, $state) {
        console.log("Current Auth", currentAuth);
    }


})();