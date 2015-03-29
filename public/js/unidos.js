 var fileControllers = angular.module('fileControllers', []);

fileControllers.controller('FilesListCtrl',['$scope', 'files', function ($scope, files){
        files.list(function(files) {
          $scope.files = files;
        });
      }]);

fileControllers.controller('FileyDetailCtrl',
 	['$scope', '$routeParams', 'files' , function ($scope, $routeParams, files){
        files.find($routeParams.FileId, function(file) {
         	$scope.file = file;
        });
      }
    ]);


fileControllers.controller('TabsController', 
	['$scope', function ($scope) {
	$scope.tab = 1;
	$scope.selectTab = function (tab) {
		$scope.tab = tab;
	};

	$scope.isActive = function (tab) {
		return tab === $scope.tab;
		};
	}
]);


angular.module('filesFactory', [])
       .factory('files', function($http){
        return {
          list: function (callback){
            $http({
              method: 'GET',
              //url: 'http://127.0.0.1:5000/files/list/',
              url: './json/list.json',
              cache: true
            }).success(callback);
          },
          find: function(id, callback){
            $http({
              method: 'GET',
              url: './json/'+id+'.json',
              cache: true
            }).success(callback);
          }
        };
      });
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
var MyApp = angular.module('MyApp', [
  'ngRoute',
  'fileControllers',
  'filesFactory',
  'fileDirective'
]);

 MyApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'file-list.html',
            controller: 'FilesListCtrl'
          }).
          when('/:FileId', {
            templateUrl: 'file-detail.html',
            controller: 'FileyDetailCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);