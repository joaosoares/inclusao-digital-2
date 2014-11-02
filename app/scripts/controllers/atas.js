'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:AtasCtrl
 * @description
 * # AtasCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('AtasCtrl', function ($scope, $firebase) {

     var ref = new Firebase("https://inclusaodigital.firebaseio.com/atas");
     var sync = $firebase(ref);

     $scope.uploadedFiles = []
     $scope.atas = sync.$asArray();


     $scope.$watchCollection('uploadedFiles', function(newArray, oldArray) {
       angular.forEach(newArray, function(obj) {
           $scope.atas.$add(obj);
       });
       $scope.uploadedFiles = [];
     })

 });
