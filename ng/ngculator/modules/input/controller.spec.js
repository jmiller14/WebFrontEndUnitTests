'use strict';

describe('InputCtrl', () => {
  let $controller;
  let controller;
  let calcInput;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcInput_) => {
    $controller = _$controller_;
    controller = $controller('InputCtrl');
    calcInput = _calcInput_;
  }));

  it('should have a local reference to calcInput', () => {
    expect(controller.input).toEqual(calcInput);
  });
});
