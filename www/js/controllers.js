angular.module('starter.controllers', [])

  .controller('AppController', function($scope, $ionicModal, $timeout, $window, $ionicPopup, $http, $ionicLoading, $ionicSlideBoxDelegate, $rootScope) {

    $rootScope.callbackUser = '';

    ////////////////////////////////////////////////
    // Lead page submit with redirect to feedback //
    ////////////////////////////////////////////////

    $scope.feedbackButton = function() {
      $ionicLoading.show({
        template: 'Loading...'
      });

      $rootScope.name = $scope.firstName + " " + $scope.surname;
      //alert($rootScope.name);

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
        street: $scope.street,
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

        //console.log(data, status);

        $rootScope.callbackUser = data;
        $scope.topic = null;
        // $scope.firstName = null;
        // $scope.surname = null;
        $scope.job = null;
        $scope.telephone = null;
        $scope.email = null;
        $scope.lead = null;
        $scope.company = null;
        $scope.industry = null;
        $scope.website = null;
        $scope.street = null;
        $scope.postcode = null;
        $scope.city = null;
        $scope.staff = null;
        $scope.operatives = null;
        $scope.notes = null;

        $window.location.href = '#/feedback';

      }).error(function (data, status, header, config) {

        $ionicLoading.hide();

        console.log(data, status);

      });

      // Input Validation
      // if ($scope.topic == undefined) {
      //   var alertPopup = $ionicPopup.alert({
      //     title: 'Error',
      //     template: 'Please fill in the topic'
      //   });
      // }
    }


    ///////////////////////////////////////
    // Lead page submit without feedback //
    ///////////////////////////////////////

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
        street: $scope.street,
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

        //console.log(data, status);

        $rootScope.callbackUser = null;
        $scope.topic = null;
        $scope.firstName = null;
        $scope.surname = null;
        $scope.job = null;
        $scope.telephone = null;
        $scope.email = null;
        $scope.lead = null;
        $scope.company = null;
        $scope.industry = null;
        $scope.website = null;
        $scope.street = null;
        $scope.postcode = null;
        $scope.city = null;
        $scope.staff = null;
        $scope.operatives = null;
        $scope.notes = null;

        //$window.location.href = '#/feedback';

      }).error(function (data, status, header, config) {

        $ionicLoading.hide();
        console.log(data, status);

      });

      // Input Validation
      // if ($scope.topic == undefined) {
      //   var alertPopup = $ionicPopup.alert({
      //     title: 'Error',
      //     template: 'Please fill in the topic'
      //   });
      // }
    }


    /////////////////////////////////////
    //////// Feedback Page Submit ///////
    /////////////////////////////////////

    $scope.finish = function(){
      $ionicLoading.show({
        template: 'Loading...'
      });

      //alert($rootScope.name);

      var feedback = {
        new_name: $rootScope.name,
        new_doyouhaveasystemalready: $scope.system,
        new_whatisthecurrentsystemcalled: $scope.systemName,
        new_costofcurrentsystem: $scope.systemCost,
        new_howdoyoucurrentlypayforyoursystem: $scope.systemPayment,
        new_currentsystemcomments: $scope.systemNotes,
        new_followupdemo: $scope.demo,
        new_date1: $scope.date1,
        new_date2: $scope.date2,
        new_doyouliketheui: $scope.ui,
        new_uicomments: $scope.uiComments,
        new_didtheprocessmakesense: $scope.sense,
        new_processcomments: $scope.senseComments,
        new_anypartoftheprocessyouwouldntuse: $scope.process,
        new_notusedcomments: $scope.processComments,
        new_anyfeaturesyouwouldlikeadded: $scope.features,
        new_addedfeaturecomments: $scope.featuresComments,
        new_tabletsorphones: $scope.mobile,
        new_leadid: $rootScope.callbackUser,
      }

      console.log(feedback);

      $http({

        url: 'http://192.168.1.12:5562/crmapi/createfeedback',
        method: 'POST',
        data: feedback,
        headers: {'Content-Type': 'application/json'}


      }).success(function (data, status, header, config){

        $ionicLoading.hide();
        console.log(data, status);
        $scope.system = null;
        $scope.systemName = null;
        $scope.systemCost = null;
        $scope.systemPayment = null;
        $scope.systemNotes = null;
        $scope.demo = null;
        $scope.date1 = null;
        $scope.date2 = null;
        $scope.ui = null;
        $scope.uiComments = null;
        $scope.sense = null;
        $scope.senseComments = null;
        $scope.process = null;
        $scope.processComments = null;
        $scope.features = null;
        $scope.featuresComments = null;
        $scope.mobile = null;
        $rootScope.callbackUser = null;
        $window.location.href = '#/lead';

      }).error(function (data, status, header, config) {

        $ionicLoading.hide();
        console.log(data, status);
      });

    }


    $scope.startAgainButton = function() {
      $window.location.href = '#/lead';
    }

    $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
    }

    $scope.previousSlide = function() {
      $ionicSlideBoxDelegate.previous();
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
