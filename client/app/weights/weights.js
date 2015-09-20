angular.module('weighMe.weights', [])
  .controller("weightController", function($scope, Weights) {
    $scope.data = {
      items: []
    };

    $scope.getWeights = function() {
      Weights.getWeights()
        .then(function(result) {
          var mapped = result.map(function(item) {
            return item.weight;
          });
          $scope.data.items = mapped;
        })
        .catch(function(err) { console.log(err); });
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
