(function () {
    'use strict';
    angular
        .module('cibrApp')
        .directive('facebookLogin', function() {
            return {
                restrict: 'AE',
                replace: false,
                templateUrl: '/components/authentication/facebookView.html'
            }
        })
})();