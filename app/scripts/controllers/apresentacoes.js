'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:ApresentacoesCtrl
 * @description
 * # ApresentacoesCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('ApresentacoesCtrl', function ($scope, $firebase) {
      var ref = new Firebase("https://inclusaodigital.firebaseio.com/apresentacoes");
      var sync = $firebase(ref);

      $scope.uploadedFiles = []
      $scope.apresentacoes = sync.$asArray();

      $scope.addApresentacao = function(id, title, url) {
          $scope.apresentacoes.$add({drive_id: id, title: title, url: url});
      }

      $scope.$watchCollection('uploadedFiles', function(newArray, oldArray) {
        angular.forEach(newArray, function(obj) {
            $scope.apresentacoes.$add(obj);
        });
        $scope.uploadedFiles = [];
      })

  });
