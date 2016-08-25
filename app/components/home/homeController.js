(function () {
    'use strict';

    angular
        .module('HomeApp')
        .controller('HomeController', [
            '$scope',
            '$rootScope',
            'currentAuth',
            '$state',
            'Auth',
            HomeController]);

    function HomeController($scope, currentAuth, $state, Auth) {
        console.log("AUTH: ", Auth);
        $scope.email = currentAuth.email;
        $scope.uid = currentAuth.uid;
        $scope.logout = function() {
            Auth.$signOut();
            $state.go('auth');
        }

    }


})();