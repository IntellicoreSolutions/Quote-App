angular.module('starter.controllers', [])

  .controller('AppController', function($scope, $ionicModal, $timeout, $window, $ionicPopup, $http, $ionicLoading, $ionicSlideBoxDelegate) {
    $scope.feedbackButton = function() {
      $window.location.href = '#/feedback';
    }

    $scope.leadButtonFinish = function(){
      $ionicLoading.show({
        template: 'Loading...'
      });
      var form = {
        topic: $scope.topic,
        firstName: $scope.firstName,
        lastName: $scope.surname,
        jobTitle: $scope.job,
        telephone: $scope.telephone,
        email: $scope.email,
        leadSource: $scope.lead,
        company: $scope.company,
        industry: $scope.industry,
        website: $scope.website,
        street: $scope.address,
        postcode: $scope.postcode,
        city: $scope.city,
        employees: $scope.staff,
        operatives: $scope.operatives,
        notes: $scope.notes,
      }


      var feedback = {
        topic: $scope.topic,
        firstName: $scope.firstName,
        lastName: $scope.surname,
        jobTitle: $scope.job,
        telephone: $scope.telephone,
        email: $scope.email,
        leadSource: $scope.lead,
        company: $scope.company,
        industry: $scope.industry,
        website: $scope.website,
        street: $scope.address,
        postcode: $scope.postcode,
        city: $scope.city,
        employees: $scope.staff,
        operatives: $scope.operatives,
        notes: $scope.notes,
      }

       console.log(form);

      $http({

        url: 'http://192.168.1.12:5562/crmapi/createlead',
        method: 'POST',
        data: form,
        headers: {'Content-Type': 'application/json'}


      }).success(function (data, status, header, config){

        $ionicLoading.hide();

        console.log(data, status);

      }).error(function (data, status, header, config) {

        $ionicLoading.hide();

        console.log(data, status);

      });

      // Input Validation
      if ($scope.topic == undefined) {
        var alertPopup = $ionicPopup.alert({
          title: 'Error',
          template: 'Please fill in the topic'
        });
      }
      //alert($scope.firstName);
      //alert($scope.surname);
      //alert($scope.job);
      //alert($scope.telephone);
      //alert($scope.email);
    }

    $scope.startAgainButton = function() {
      $window.location.href = '#/lead';
    }


    //Hide / show feedback input based on value

    $scope.showSystem = function(system) {
      if (system == 1) {
        $scope.showSys = true;
      } else {
        $scope.showSys = false;
      }
    }

    $scope.showDemo = function(demo) {
      if (demo == 1) {
        $scope.showDem = true;
      } else {
        $scope.showDem = false;
      }
    }

    $scope.showUI = function(ui) {
      if (ui == 0) {
        $scope.showU = true;
      } else {
        $scope.showU = false;
      }
    }

    $scope.showSense = function(sense) {
      if (sense == 0) {
        $scope.showSen = true;
      } else {
        $scope.showSen = false;
      }
    }

    $scope.showProcess = function(process) {
      if (process == 1) {
        $scope.showPro = true;
      } else {
        $scope.showPro = false;
      }
    }

    $scope.showFeatures = function(features) {
      if (features == 1) {
        $scope.showFeat = true;
      } else {
        $scope.showFeat  = false;
      }
    }

  });
