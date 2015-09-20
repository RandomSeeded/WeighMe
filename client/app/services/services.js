angular.module('weighMe.services', []) 
.factory('Weights', function($http) {
  var getWeights = function() {
    return $http({
      method: 'GET',
      url: '/api/weights',
      data: { }
    }).then(function(resp) {
      return resp.data;
    });
  };

  var postWeight = function(weight) {
    return $http({
      method: 'POST',
      url: '/api/weights',
      data: { weight: weight }
    }).then(function (resp) {
      return resp.data;
    });
  };

  return {
    getWeights: getWeights,
    postWeight: postWeight
  }
});

