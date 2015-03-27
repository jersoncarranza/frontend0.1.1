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