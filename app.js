var app = angular.module('currencyApp', []);

app.controller('CurrencyController', function($scope) {
  $scope.amount = 1;
  $scope.targetCurrency = 'INR';
  $scope.result = 0;
  $scope.converted = false;

  const rates = {
    EUR: 0.85,
    INR: 1,
    JPY: 110,
    USD : 84,
  };

  $scope.convert = function() {
    const rate = rates[$scope.targetCurrency];
    $scope.result = ($scope.amount * rate).toFixed(2);
    $scope.converted = true;
  };
});
