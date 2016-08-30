(function () {
    // https://blog.khophi.co/email-verification-firebase-3-0-sdk/
    angular
        .module('EmailVerifyApp')
        .controller('emailVerifyController', ['$scope', '$stateParams', 'currentAuth', 'DatabaseRef',
            function ($scope, $stateParams, currentAuth, DatabaseRef) {
                $scope.doVerify = function () {
                    firebase.auth()
                        //https://firebase.google.com/docs/reference/js/firebase.auth.Auth#applyActionCode
                        .applyActionCode($stateParams.oobCode)
                        .then(function (data) {
                            console.log(currentAuth.uid);
                            // DatabaseRef is just a service
                            // that returns the root of my database url
                            DatabaseRef.child('users')
                                .child(currentAuth.uid)
                                .update({emailVerified: true});
                            // the above is assuming you have root/users/uid/
                            toastr.success('Verification happened', 'Success!');
                        })
                        .catch(function (error) {
                            $scope.error = error.message;
                            toastr.error(error.message, error.reason, {timeOut: 0});
                        })
                };
            }
        ])
})();