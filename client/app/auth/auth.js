angular.module('weighMe.auth', [])
.controller('authController', function($scope, Auth) {
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
