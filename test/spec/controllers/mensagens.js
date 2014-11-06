'use strict';

describe('Controller: MensagensCtrl', function () {

  // load the controller's module
  beforeEach(module('developmentApp'));

  var MensagensCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MensagensCtrl = $controller('MensagensCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
