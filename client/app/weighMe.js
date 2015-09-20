angular.module('weighMe', [ 
    'weighMe.weights', 
    'weighMe.services', 
    'weighMe.auth', 
    'ngRoute' ])
.config(function($routeProvider) {
  $routeProvider
    .when('/weights', {
      templateUrl: 'app/weights/weights.html',
      controller: 'weightController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'authController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/login.html',
      controller: 'authController'
    })
    .otherwise({
      templateUrl: 'app/weights/weights.html',
      controller: 'weightController'
    })
});
