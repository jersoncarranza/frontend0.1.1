 angular.module('fileDirective', [])
     .directive('file', function(){
        return {
          scope: {
            file: '='
          },
          restrict: 'A',
          templateUrl:  'file.html',
          controller:['$scope', 'files', function($scope, files){
            files.find($scope.file.id, function(file) {
              $scope.content = file.description;
            });
          }]
        };
      });

     //['$scope', '$rootScope', '$location', '$http', function checkInCtrl ($scope, $rootScope, $location, $http){}]