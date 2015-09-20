angular.module('weighMe.weights', [])
  .controller("weightController", function($scope, Weights) {
    $scope.data = {
      items: []
    };

    $scope.getWeights = function() {
      console.log('getting weights');
      Weights.getWeights()
        .then(function(result) {
          console.log('result',result);
          var mapped = result.map(function(item) {
            return item.weight;
          });
          $scope.data.items = mapped;
        });
    };

    $scope.addWeight = function(newWeight) {
      $scope.data.items.push(newWeight);
      // Add code which communicates this to the server here
      Weights.postWeight(newWeight);
    };

    $scope.removeWeight = function(item) {
      var idx = $scope.data.items.indexOf(item);
      $scope.data.items.splice(idx, 1);
    }

    $scope.getWeights();
  });
