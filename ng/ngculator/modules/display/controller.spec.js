'use strict';

describe('DisplayCtrl', () => {
  let $controller;
  let controller;
  let calcHistory;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcHistory_) => {
    $controller = _$controller_;
    controller = $controller('DisplayCtrl');
    calcHistory = _calcHistory_;
  }));

  it('should have a local reference to calcHistory', () => {
    expect(controller.history).toEqual(calcHistory);
  });
});
