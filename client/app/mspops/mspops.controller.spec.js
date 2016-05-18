'use strict';

describe('Component: MspopsComponent', function () {

  // load the controller's module
  beforeEach(module('mean2App'));

  var MspopsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MspopsComponent = $componentController('MspopsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
