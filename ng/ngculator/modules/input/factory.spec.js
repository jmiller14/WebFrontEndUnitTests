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

  describe('isPositive()', () => {
    it('should return true when the value is 42', () => {
      calcInput.value = 42;
      expect(calcInput.isPositive()).toBe(true);
    });

    it('should return false when the value is 0', () => {
      calcInput.value = 0;
      expect(calcInput.isPositive()).toBe(false);
    });

    it('should return false when the value is -42', () => {
      calcInput.value = -42;
      expect(calcInput.isPositive()).toBe(false);
    });
  })

  describe('isInteger', () => {
    it('should return true when the value is 42', () => {
      calcInput.value = 42;
      expect(calcInput.isInteger()).toBe(true);
    });

    it('should return false when the value is 1.1', () => {
      calcInput.value = 1.1;
      expect(calcInput.isInteger()).toBe(false);
    });
  });
});
