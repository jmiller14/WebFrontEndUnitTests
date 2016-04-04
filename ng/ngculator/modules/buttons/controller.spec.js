'use strict';

describe('ButtonCtrl', () => {
  let $controller;
  let controller;
  let calcButtons;
  let $rootScope;
  let $scope;

  const BUTTON_NAME = 'mockName';

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcButtons_, _$rootScope_) => {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();

    $scope.name = BUTTON_NAME;

    controller = $controller('ButtonCtrl', {$scope: $scope}, {name: BUTTON_NAME});
    calcButtons = _calcButtons_;
  }));

  it('should call the calc function of the button named', () => {
    spyOn(calcButtons, 'calc');
    controller.press();
    expect(calcButtons.calc).toHaveBeenCalledWith(BUTTON_NAME);
  });
});
