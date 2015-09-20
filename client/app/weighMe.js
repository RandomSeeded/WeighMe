angular.module('weighMe', [ 'weighMe.weights', 'weighMe.services', 'ngRoute' ])
.config(function($routeProvider) {
  $routeProvider
    .when('/weights', {
      templateUrl: 'app/weights/weights.html',
      controller: 'weightController'
    })
})
