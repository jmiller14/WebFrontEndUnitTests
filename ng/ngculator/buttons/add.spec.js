'use strict';

describe('addButton', () => {
  let addButton;

  const A_NUMBER = 1.234;
  const ANOTHER_NUMBER = 5.678;
  const SUM = A_NUMBER + ANOTHER_NUMBER;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_addButton_) => {
    addButton = _addButton_;
  }));

  describe('calc()', () => {
    it('should add two numbers', () => {
      expect(addButton.calc(A_NUMBER, ANOTHER_NUMBER)).toBe(SUM);
    });
  });
});
