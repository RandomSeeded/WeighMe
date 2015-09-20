angular.module('weighMe.weights', [])
  .controller("weightController", function($scope, Weights) {
    $scope.data = {
      items: []
    };

    $scope.addWeight = function(newWeight) {
      $scope.data.items.push(newWeight);
      // Add code which communicates this to the server here
      console.log(newWeight);
      Weights.postWeight(newWeight);
    };
    $scope.removeWeight = function(item) {
      var idx = $scope.data.items.indexOf(item);
      $scope.data.items.splice(idx, 1);
    }
  });
