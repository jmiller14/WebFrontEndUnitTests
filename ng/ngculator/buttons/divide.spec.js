'use strict';

describe('divideButton', () => {
  let divideButton;

  const A_NUMBER = 1.234;
  const ANOTHER_NUMBER = 5.678;
  const ZERO = 0;

  const QUOTIENT = A_NUMBER / ANOTHER_NUMBER;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_divideButton_) => {
    divideButton = _divideButton_;
  }));

  describe('calc()', () => {
    it('should add two numbers', () => {
      expect(divideButton.calc(A_NUMBER, ANOTHER_NUMBER)).toBe(QUOTIENT);
    });

    it('should return an error when dividing by zero', () => {
      expect(divideButton.calc(A_NUMBER, ZERO)).toBe('Error: Divide by zero');
    });
  });
});
