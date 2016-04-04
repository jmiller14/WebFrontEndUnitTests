'use strict';

describe('multiplyButton', () => {
  let multiplyButton;

  const A_NUMBER = 1.234;
  const ANOTHER_NUMBER = 5.678;
  const PRODUCT = A_NUMBER * ANOTHER_NUMBER;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_multiplyButton_) => {
    multiplyButton = _multiplyButton_;
  }));

  describe('calc()', () => {
    it('should add two numbers', () => {
      expect(multiplyButton.calc(A_NUMBER, ANOTHER_NUMBER)).toBe(PRODUCT);
    });
  });
});
