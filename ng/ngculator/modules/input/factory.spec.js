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

  describe('addDigit()', () => {
    const INVALID_DIGIT = 'A';
    const NUMBER = 4;
    const ANOTHER_NUMBER = 2;
    const DECIMAL_POINT = '.';
    const MINUS_SIGN = '-';

    beforeEach(() => {
      calcInput.clear();
    });

    it('should throw an error when something other than a number, a decimal point, or a minus sign is passed', () => {
      expect(calcInput.addDigit.bind(calcInput, INVALID_DIGIT)).toThrowError();
    });

    describe('when the value is 0', () => {
      beforeEach(() => {
        calcInput.clear();
      });

      describe('when the decimal point has not been pressed', () => {
        beforeEach(() => {
          calcInput.nextIsDecimal = false;
        });

        it('when passed a number should make the value that number', () => {
          calcInput.addDigit(NUMBER);
          expect(+calcInput.value).toBe(NUMBER);
        });
      });

      describe('when the decimal point has been pressed', () => {
        beforeEach(() => {
          calcInput.nextIsDecimal = true;
        });

        it('when passed a number should make the value 1/10th of the number', () => {
          calcInput.addDigit(NUMBER);
          expect(+calcInput.value).toBe(NUMBER / 10);
        });
      });
    });

    describe('when the value as a digit already', () => {
      beforeEach(() => {
        calcInput.value = NUMBER;
      });

      describe('when the decimal point has not been pressed', () => {
        beforeEach(() => {
          calcInput.nextIsDecimal = false;
        });

        it('when passed a number, should postfix the number to the value', () => {
          const EXPECTED_VALUE = NUMBER * 10 + ANOTHER_NUMBER;

          calcInput.addDigit(ANOTHER_NUMBER);
          expect(+calcInput.value).toBe(EXPECTED_VALUE);
        });
      });

      describe('when the decimal point has been pressed', () => {
        beforeEach(() => {
          calcInput.nextIsDecimal = true;
        });

        it('when passed a number, should append the digit as a decimal', () => {
          const EXPECTED_VALUE = NUMBER + ANOTHER_NUMBER / 10;

          calcInput.addDigit(ANOTHER_NUMBER);
          expect(+calcInput.value).toBe(EXPECTED_VALUE);
        });
      });
    });

    it('when passed a minus sign should invert the sign of the value', () => {
      const EXPECTED_VALUE = -NUMBER;

      calcInput.value = NUMBER;
      calcInput.addDigit('-');
      expect(+calcInput.value).toBe(EXPECTED_VALUE);
    });

    describe('when passed a period and the value is an integer', () => {
      it('should flag the next value passed to be a decimal', () => {
        calcInput.nextIsDecimal = false;
        calcInput.value = NUMBER;
        calcInput.addDigit('.');
        expect(calcInput.nextIsDecimal).toBe(true);
      });
    });

    describe('when passed a period and the value is not an integer', () => {
      it('should not flag the next value passed to be a decimal', () => {
        calcInput.nextIsDecimal = false;
        calcInput.value = NUMBER + '.' + ANOTHER_NUMBER;
        calcInput.addDigit('.');
        expect(calcInput.nextIsDecimal).toBe(false);
      });
    });
  });
});
