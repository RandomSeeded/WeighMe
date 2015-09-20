angular.module('weighMe.services', []) 
.factory('Weights', function($http) {
  var postWeight = function(weight) {
    return $http({
      method: 'POST',
      url: '/api/weights',
      data: { weight: weight }
    }).then(function (resp) {
      return resp.data;
    });
  }
  return {
    postWeight: postWeight
  }
});

