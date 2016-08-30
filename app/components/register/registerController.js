(function () {
    'use strict';

    angular
        .module('RegisterApp')
        .controller('RegisterController', ["$scope", '$state', "Auth",
            function($scope, $state, Auth) {
                $scope.createUser = function() {
                    console.log("CREDS", $scope.email);
                    Auth.$createUserWithEmailAndPassword(
                        $scope.email, $scope.password
                    ).then(function(userData) {
                        console.log("DATA: ", userData.uid);
                        console.log('AUTH INFO: ', Auth.$getAuth);


                        // var ref = firebase.database().ref().child('users').child(newUser.uid);
                        // ref.set({ firstname: info.firstname, lastname: info.lastname, uid: newUser.uid });

                        $state.go('auth');
                    }).catch(function(error) {
                        $scope.error = error;
                    })
                }
            }
        ]);
})();