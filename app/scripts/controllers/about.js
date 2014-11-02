'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
