'use strict';

angular.module('mean2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mspops', {
        url: '/mspops',
        template: '<mspops></mspops>'
      });
  });
