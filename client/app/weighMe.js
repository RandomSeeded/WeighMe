angular.module('weighMe', [ 'weighMe.weights', 'weighMe.services', 'ngRoute' ])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/weights/weights.html',
      controller: 'weightController'
    })
})
