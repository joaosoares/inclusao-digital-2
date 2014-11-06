'use strict';

/**
 * @ngdoc overview
 * @name developmentApp
 * @description
 * # developmentApp
 *
 * Main module of the application.
 */
angular
  .module('developmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'lk-google-picker',
  ])
  .config(function ($routeProvider, lkGoogleSettingsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/apresentacoes', {
        templateUrl: 'views/apresentacoes.html',
        controller: 'ApresentacoesCtrl',
        activetab: 'apresentacoes'
      })
      .when('/atas', {
        templateUrl: 'views/atas.html',
        controller: 'AtasCtrl'
      })
      .when('/mensagens', {
        templateUrl: 'views/mensagens.html',
        controller: 'MensagensCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    lkGoogleSettingsProvider.configure({
      apiKey   : 'AIzaSyBD_BmWHAHvpKzKG7gKDUYqrph-EigGNC0',
      clientId : '634238586524-tne1h4l2o0pffq2itgekd29m7up54f86.apps.googleusercontent.com',
      scopes   : ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.file'],
      locale   : 'pt-BR',
      views    : ['DocsUploadView().setMimeTypes("application/vnd.ms-powerpointtd,application/vnd.openxmlformats-officedocument.presentationml.presentation")',
                  'DocsView().setMimeTypes("application/vnd.google-apps.presentation,application/vnd.ms-powerpointtd,application/vnd.openxmlformats-officedocument.presentationml.presentation")'
                 ]
    });
  });
