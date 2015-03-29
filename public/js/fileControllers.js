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

