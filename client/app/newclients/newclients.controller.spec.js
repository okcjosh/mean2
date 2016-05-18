'use strict';

describe('Component: NewclientsComponent', function () {

  // load the controller's module
  beforeEach(module('mean2App'));

  var NewclientsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    NewclientsComponent = $componentController('NewclientsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
