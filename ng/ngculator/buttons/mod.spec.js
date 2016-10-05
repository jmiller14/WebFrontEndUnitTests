'use strict';

describe('modButton', () => {
  let modButton;

  const A_NUMBER = 23894729387;
  const ANOTHER_NUMBER = 42;
  const ZERO = 0;

  const MODULUS = A_NUMBER % ANOTHER_NUMBER;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_modButton_) => {
    modButton = _modButton_;
  }));

  describe('calc()', () => {
    it('should find the modulus of two numbers', () => {
      expect(modButton.calc(A_NUMBER, ANOTHER_NUMBER)).toBe(MODULUS);
    });

    it('should return an error when the divisor is zero', () => {
      expect(modButton.calc(A_NUMBER, ZERO)).toBe('Error: Divide by zero');
    });
  });
});
