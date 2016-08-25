(function () {
    'use strict';

    angular
        .module('AuthenticationApp')
        .directive('facebookModal', facebookModalDirective);

    function facebookModalDirective() {
        var directive = {
            restrict: 'AE',
            scope: {},
            replace: true,
            // controller: AuthController,
            templateUrl: 'components/authentication/facebookView.html',
           link: function(scope, element, attrs) {
               // scope.facebookShowModal = function() {
               //     alert("FUCK");
               // }
           }
        };

        return directive;
    }
})();