'use strict';

angular.module('mean2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newclients', {
        url: '/newclients',
        template: '<newclients></newclients>'
      });
  });
