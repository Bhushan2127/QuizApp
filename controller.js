
angular
    .module('myApp')
    .controller('mycntrl2', function($scope, $rootScope){
        //$rootScope.var = 1000;
        $scope.myVar = $rootScope.var;
        $scope.myVar2 = 15;
    })