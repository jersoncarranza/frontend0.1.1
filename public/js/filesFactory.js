angular.module('filesFactory', [])
       .factory('files', function($http){
        return {
          list: function (callback){
            $http({
              method: 'GET',
              //url: 'http://127.0.0.1:5000/files/list/',
              url: 'https://snatlybackend.herokuapp.com/files/list',
              cache: false
            }).success(callback);
          },
          find: function(id, callback){
            $http({
              method: 'GET',
              url: 'https://snatlybackend.herokuapp.com/files/see/'+id,
              cache: false
            }).success(callback);
          }
        };
      });