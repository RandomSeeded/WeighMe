angular.module('weighMe.services', []) 
.factory('Weights', function($http) {
  var postWeights = function(weight) {
    return $http({
      method: 'POST',
      url: '/api/weights',
      data: { weights: weight }
    }).then(function (resp) {
      return resp.data;
    });
  }
  return {
    postWeights: postWeights
  }
});

