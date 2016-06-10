// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {

    $rootScope.ip = prompt("Please enter IP Jack Nutkins");
    //alert($rootScope.ip);

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('lead', {
        url: '/lead',
        views: {
          'page': {
            templateUrl: 'templates/lead.html',
            controller: 'AppController'

          }
        }
      })

      .state('feedback', {
        url: '/feedback',
        views: {
          'page': {
            templateUrl: 'templates/feedback.html',
            controller: 'AppController'
          }
        }
      })




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/lead');
  });
