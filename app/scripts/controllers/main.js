'use strict';

/**
 * @ngdoc function
 * @name developmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the developmentApp
 */
angular.module('developmentApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
