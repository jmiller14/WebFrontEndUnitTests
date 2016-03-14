'use strict';

describe('calcInput', () => {
  let calcInput;

  beforeEach(inject(_calcInput_ => {
    calcInput = _calcInput_;
  }));

  it('should have an initial value of 0', () => {
    expect(calcInput.value).toBe(0);
  });

  describe('clear()', () => {
    it('should clear the value', () => {
      calcInput.value = 'test';

      calcInput.clear();
      expect(calcInput.value).toBe(0);
    });
  });
});

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
