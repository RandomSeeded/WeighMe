angular.module('weighMe.services', []) 
.factory('Weights', function($http) {
  var postWeights = function(weight) {
    return $http({
      method: 'POST',
      url: '/api/weights',
      data: { url: url }
    }).then(function (resp) {
      return resp.data;
    });
  }
  return {
    postWeights: postWeights
  }
});

