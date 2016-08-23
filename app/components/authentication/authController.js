(function () {
    'use strict';

    angular
        .module('AuthenticationApp')
        .controller('AuthController', AuthController);
    
    function AuthController(Auth, $state) {
        console.log("AUTH: ", Auth);
        var vm = this;
        vm.login = login;
        
        function saveUser() {
            // TODO: save the user data at the users endpoint
        }
        
        function login() {
            Auth.$signInWithEmailAndPassword(
                vm.email, vm.password
            ).then(function(data) {
                vm.email = null;
                vm.password = null;
                $state.go('/home');
            }).catch(function(error) {
                console.log(error);
            })
        }
    }
})();