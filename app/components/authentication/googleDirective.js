(function () {
    'use strict';
    angular
        .module('cibrApp')
        .directive('googleLogin', function() {
            return {
                restrict: 'AE',
                replace: false,
                templateUrl: '/components/authentication/googleView.html'
            }
        })
})();