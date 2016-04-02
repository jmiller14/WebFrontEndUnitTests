'use strict';

describe('subtractButton', () => {
  let subtractButton;

  const A_NUMBER = 1.234;
  const ANOTHER_NUMBER = 5.678;
  const DIFFERENCE = A_NUMBER - ANOTHER_NUMBER;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_subtractButton_) => {
    subtractButton = _subtractButton_;
  }));

  describe('calc()', () => {
    it('should add two numbers', () => {
      expect(subtractButton.calc(A_NUMBER, ANOTHER_NUMBER)).toBe(DIFFERENCE);
    });
  });
});
