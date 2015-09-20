angular.module('weighMe.auth', [])
.controller('authController', function($scope, Auth) {
  $scope.signup = function() {
    Auth.signup($scope.user.username, $scope.user.password)
  };
});
