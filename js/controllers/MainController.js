app.controller('MainController', ['$scope', function($scope) { 
    $scope.list = ["Bank Reconciliation", "Inactive Clients SMS", "New Year E-shot"]

    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    }
}]);