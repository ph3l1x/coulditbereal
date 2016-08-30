(function () {
    'use strict';
    angular
        .module('cibrApp')
        .controller('wrapperController', [
            '$scope',
            '$rootScope',
            '$state',
            'Auth',
            'firebase',
            wrapperCtrl
        ]);
    function wrapperCtrl($scope, currentAuth, $state, Auth) {
        firebase.auth().onAuthStateChanged(function(user) {
           if(user) {
               console.log("USER:", user.photoURL);
               $scope.userImage = user.photoURL;
               $scope.user = true;
               $scope.username = user.displayName;
           } else {

           }
        });

        $scope.logout = function() {

            if(Auth.$getAuth().providerData[0].providerId === "google.com") {
                var googleAuth = gapi.auth2.getAuthInstance();
                googleAuth.signOut().then(function() {
                    firebase.auth().signOut();
                });
            } else {
                firebase.auth().signOut();
            }
        }
    }
})();