'use strict';

angular.module('mean2App.auth', ['mean2App.constants', 'mean2App.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
