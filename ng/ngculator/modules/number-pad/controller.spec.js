'use strict';

describe('NumberPadCtrl', () => {
  let $controller;
  let controller;
  let calcInput;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_$controller_, _calcInput_) => {
    $controller = _$controller_;
    controller = $controller('NumberPadCtrl');
    calcInput = _calcInput_;
  }));

  describe('press()', () => {
    it('should call calcInput with the given value', () => {
      const A_NUMBER = 42;

      spyOn(calcInput, 'addDigit');
      controller.press(A_NUMBER);
      expect(calcInput.addDigit).toHaveBeenCalledWith(A_NUMBER);
    });
  });
});
