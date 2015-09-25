angular.module('weighMe.auth', [])
.controller('authController', function($scope, Auth) {
  // Methods dealing with logging in
  $scope.signin = function() {
    Auth.signin($scope.user.username, $scope.user.password)
      .then(function(response) {
        if (response.status === 200) {
          $scope.loginFailed = false;
          $scope.loginPassed = true;
        }
      })
    .catch(function(err) {
      if (err.status === 401) {
        $scope.loginFailed = true;
        $scope.loginPassed = false;
      }
    });
  };
  $scope.loginSuccess = function() { 
    if ($scope.loginPassed) { return true; }
    return false;
  }
  $scope.loginFail = function() {
    if ($scope.loginFailed) { return true; }
    return false;
  }

  // Methods dealing with Signup
  $scope.signup = function() {
    Auth.signup($scope.user.username, $scope.user.password)
      .then(function(response) {
        if (response.status === 201) {
          $scope.newUsername = true;
          $scope.userTaken = false;
        }
        else {
          $scope.newUsername = false;
          $scope.userTaken = true;
        }
      });
  };
  $scope.displayUserTaken = function() {
    if ($scope.userTaken) { return true; }
    return false;
  }
  $scope.displayUserCreated = function() {
    if ($scope.newUsername) { return true; }
    return false;
  }
});
