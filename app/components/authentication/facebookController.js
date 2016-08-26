(function () {
    angular
        .module('cibrApp')
        .controller('facebookController', facebookAuth);
            function facebookAuth() {
                function checkLoginState(event) {
                    if (event.authResponse) {
                        var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
                            unsubscribe();
                            if (!isUserEqual(event.authResponse, firebaseUser)) {
                                var credential = firebase.auth.FacebookAuthProvider.credential(
                                    event.authResponse.accessToken);
                                firebase.auth().signInWithCredential(credential).catch(function(error) {
                                    var errorCode = error.code;
                                    var errorMessage = error.message;
                                    var email = error.email;
                                    var credential = error.credential;
                                    if (errorCode === 'auth/account-exists-with-different-credential') {
                                        alert('You have already signed up with a different auth provider for that email.');
                                    } else {
                                        console.error(error);
                                    }
                                });
                            } else {
                            }
                        });
                    } else {
                        firebase.auth().signOut();
                    }
                }

                function isUserEqual(facebookAuthResponse, firebaseUser) {
                    if (firebaseUser) {
                        var providerData = firebaseUser.providerData;
                        for (var i = 0; i < providerData.length; i++) {
                            if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
                                providerData[i].uid === facebookAuthResponse.userID) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                FB.init({
                    appId      : '170760046688047',
                    status     : true,
                    xfbml      : true,
                    version    : 'v2.6'
                });
                FB.Event.subscribe('auth.authResponseChange', checkLoginState);
            }
})();