(function () {
    'use strict';
    angular.module('AuthenticationApp', []);
    angular.module('HomeApp', []);
    angular.module('RegisterApp', []);
    angular.module('cibrApp', [
            'firebase',
            'ngMaterial',
            'angular-md5',
            'ui.router',
            'AuthenticationApp',
            'RegisterApp',
            'HomeApp'
            // 'EmailVerifyApp'
        ])
        .factory("Auth", ["$firebaseAuth", function ($firebaseAuth) {
            return $firebaseAuth();
        }])
        .controller("MainController", ["$scope", "Auth", function ($scope, Auth) {
            $scope.auth = Auth;
            $scope.user = $scope.auth.$getAuth();
        
        }])
        .run(["$rootScope", "$state", function ($rootScope, $state) {
            $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
                console.log("ERROR", error);
                if (error === "AUTH_REQUIRED") {
                    $state.go("auth");
                }
            });
        }])
        .config(["$urlRouterProvider", "$stateProvider", function ($urlRouteProvider, $stateProvider) {
            $stateProvider
                .state("home", {
                    url: '/home',
                    controller: "HomeController as home",
                    templateUrl: "components/home/homeView.html",
                    resolve: {
                        currentAuth: ["Auth", function (Auth) {
                            return Auth.$requireSignIn(Auth);
                        }]
                    }
                })
                // .state('emailVerify', {
                //     url: '/verify-email?mode&oobCode',
                //     templateUrl: 'components/authentication/verify-email.html',
                //     controller: 'emailVerifyController',
                //     resolve: {
                //         currentAuth: ['Auth', function(Auth) {
                //             return Auth.$requireSignIn();
                //         }]
                //     }
                // })

                // .state('videos', {
                //     url: '/videos',
                //     templateUrl: 'components/videos/videosView.html',
                //     controller: 'videosController as videos'
                // })
                .state('register', {
                    url: '/register',
                    templateUrl: 'components/register/registerView.html',
                    controller: 'RegisterController as register'
                })
                .state('auth', {
                    url: '/auth',
                    templateUrl: 'components/authentication/authView.html',
                    controller: 'AuthController as auth'
                });
            $urlRouteProvider.otherwise('/auth');
        }]);
})();



