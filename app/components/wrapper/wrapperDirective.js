(function () {
    'use strict';
    angular
        .module('cibrApp')
        .directive('headerWrapper', function() {
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: '/components/wrapper/wrapperHeaderView.html'
            }
        })
        .directive('footer', function() {
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: '/components/wrapper/wrapperFooterView.html'
            }
        })
})();