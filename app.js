angular
    .module('myApp', [])
    .controller('mycntrl1', ['$scope','$rootScope', function($scope, $rootScope){
        $scope.myVar = 10;
        $rootScope.var = 1000;
        $scope.multiplyByTen = () => { 
            $scope.myVar *= 10;
        }
     }])

