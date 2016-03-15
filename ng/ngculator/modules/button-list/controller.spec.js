'use strict';

describe('ButtonListCtrl', () => {
  let $controller;
  let controller;
  let calcButtons;

  const BUTTON_NAME = 'mockName';
  const BUTTON_LABEL = 'mock label';

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcButtons_) => {
    $controller = _$controller_;
    calcButtons = _calcButtons_;
    spyOn(calcButtons, 'list');
    controller = $controller('ButtonListCtrl');

    controller.name = BUTTON_NAME;
    controller.label = BUTTON_LABEL;
  }));

  it('should get the button list', () => {
    expect(calcButtons.list).toHaveBeenCalled();
    expect(controller.buttons).toEqual(calcButtons);
  });
});
