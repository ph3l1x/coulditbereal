(function () {
    angular
        .module('cibrApp')
        .controller('googleController', googleAuth);
    function googleAuth() {

        function onSignIn(googleUser) {
            console.log('Google Auth Response', googleUser);

            var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
                unsubscribe();

                if (!isUserEqual(googleUser, firebaseUser)) {

                    var credential = firebase.auth.GoogleAuthProvider.credential(
                        googleUser.getAuthResponse().id_token);

                    firebase.auth().signInWithCredential(credential).catch(function(error) {

                        var errorCode = error.code;
                        var errorMessage = error.message;

                        var email = error.email;

                        var credential = error.credential;

                        if (errorCode === 'auth/account-exists-with-different-credential') {
                            alert('You have already signed up with a different auth provider for that email.');
                            // If you are using multiple auth providers on your app you should handle linking
                            // the user's accounts here.
                        } else {
                            console.error(error);
                        }

                    });

                } else {
                    console.log('User already signed-in Firebase.');
                }
            });
        }

        /**
         * Check that the given Google user is equals to the given Firebase user.
         */

        function isUserEqual(googleUser, firebaseUser) {
            if (firebaseUser) {
                var providerData = firebaseUser.providerData;
                for (var i = 0; i < providerData.length; i++) {
                    if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                        providerData[i].uid === googleUser.getBasicProfile().getId()) {

                        return true;
                    }
                }
            }
            return false;
        }

        function handleSignOut() {
            var googleAuth = gapi.auth2.getAuthInstance();
            googleAuth.signOut().then(function() {
                firebase.auth().signOut();
            });
        }

        
        
        
    }
})();