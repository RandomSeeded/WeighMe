angular.module('weighMe.services', []) 
.factory('Auth', function($http) {
  var signin = function(username, password) {
  };

  var signout = function() {
  };

  var signup = function(username, password) {
    return $http({
      method: 'POST',
      url: '/api/users',
      data: { username: username, password: password }
    }).then(function(resp) {
      return resp;
    });
  };

  return {
    signin: signin,
    signout: signout,
    signup: signup
  }
})
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
})
.factory('Users', function($http) {
  var addUser = function(username, password) {
    return $http({
      method: 'POST',
      url: '/api/users',
      data: { username: username, password: password }
    }).then(function(resp) {
      return resp.data;
    });
  };

  return {
    addUser: addUser
  }
});

