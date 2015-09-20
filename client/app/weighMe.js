angular.module('weighMe', [ 'weighMe.weights', 'weighMe.services', 'ngRoute' ])
.config(function($routeProvider) {
  $routeProvider
    .when('/weights', {
      templateUrl: 'app/weights/weights.html',
      controller: 'weightController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html'
    })
    .when('/signin', {
      templateUrl: 'app/auth/login.html'
    })
    .otherwise({
      templateUrl: 'app/weights/weights.html',
      controller: 'weightController'
    })
});
