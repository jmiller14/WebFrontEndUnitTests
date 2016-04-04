'use strict';

describe('calcButtons', () => {
  const STRING = 'mock string';
  const FUNCTION = function () {};
  const NUMBER = 42;

  const VALID_BUTTON = {
    name: 'VALID_BUTTON',
    label: 'mockLabel',
    calc: jasmine.createSpy('calc').and.callFake(() => NUMBER)
  };

  const ANOTHER_VALID_BUTTON = {
    name: 'ANOTHER_VALID_BUTTON',
    label: 'mockLabel',
    calc: jasmine.createSpy('calc').and.callFake(() => NUMBER)
  };

  const MISSING_NAME = {
    label: 'mock label',
    calc: FUNCTION
  };

  const MISSING_LABEL = {
    name: 'mockName',
    calc: FUNCTION
  };

  const MISSING_CALC = {
    name: 'mockName',
    label: 'mock label'
  };

  const INVALID_NAME = {
    name: NUMBER,
    label: STRING,
    calc: FUNCTION
  };

  const INVALID_LABEL = {
    name: STRING,
    label: NUMBER,
    calc: FUNCTION
  };

  const INVALID_CALC = {
    name: STRING,
    label: STRING,
    calc: STRING
  };

  let calcButtons;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject((_calcButtons_) => {
    calcButtons = _calcButtons_;
    calcButtons.clear();
  }));

  afterEach(() => calcButtons.clear());

  describe('add()', () => {
    it('should throw an error when called with no parameters', () => {
      expect(calcButtons.add.bind(calcButtons)).toThrowError(ReferenceError);
    });

    it('should throw a ReferenceError when missing a name, label, or calc method', () => {
      expect(calcButtons.add.bind(calcButtons, MISSING_NAME)).toThrowError(ReferenceError);
      expect(calcButtons.add.bind(calcButtons, MISSING_LABEL)).toThrowError(ReferenceError);
      expect(calcButtons.add.bind(calcButtons, MISSING_CALC)).toThrowError(ReferenceError);
    });

    it('should throw a TypeError when name, label, or calc are the wrong type', () => {
      expect(calcButtons.add.bind(calcButtons, INVALID_NAME)).toThrowError(TypeError);
      expect(calcButtons.add.bind(calcButtons, INVALID_LABEL)).toThrowError(TypeError);
      expect(calcButtons.add.bind(calcButtons, INVALID_CALC)).toThrowError(TypeError);
    });

    it('should add a valid button', () => {
      calcButtons.add(VALID_BUTTON);
      calcButtons.calc(VALID_BUTTON.name);

      expect(VALID_BUTTON.calc).toHaveBeenCalled();
    });

    it('should add multiple buttons when passed as an array', () => {
      calcButtons.add([VALID_BUTTON, ANOTHER_VALID_BUTTON]);
      calcButtons.calc(VALID_BUTTON.name);
      calcButtons.calc(ANOTHER_VALID_BUTTON.name);

      expect(VALID_BUTTON.calc).toHaveBeenCalled();
      expect(ANOTHER_VALID_BUTTON.calc).toHaveBeenCalled();
    });

    it('should throw an error when a button with the same name exists', () => {
      calcButtons.add(VALID_BUTTON);
      expect(calcButtons.add.bind(calcButtons, VALID_BUTTON)).toThrowError(Error);
    });
  });

  describe('getLabel()', () => {
    it('should throw a ReferenceError when called with no parameters', () => {
      expect(calcButtons.getLabel.bind(calcButtons)).toThrowError(ReferenceError);
    });

    it('should throw a TypeError when the name parameter is not a string', () => {
      expect(calcButtons.getLabel.bind(calcButtons, NUMBER)).toThrowError(TypeError);
    });

    it('should return null when the button does not exist', () => {
      expect(calcButtons.getLabel(STRING)).toBe(null);
    });

    it('should return a label when a button exists', () => {
      calcButtons.add(VALID_BUTTON);
      expect(calcButtons.getLabel(VALID_BUTTON.name)).toBe(VALID_BUTTON.label);
    });
  });

  describe('calc()', () => {
    beforeEach(() => {
      calcButtons.add([VALID_BUTTON, ANOTHER_VALID_BUTTON]);
    });

    it('should throw a ReferenceError when called without a parameter', () => {
      expect(calcButtons.calc.bind(calcButtons)).toThrowError(ReferenceError);
    });

    it('should throw a TypeError when called with an invalid parameter', () => {
      expect(calcButtons.calc.bind(calcButtons, NUMBER)).toThrowError(TypeError);
    });

    it('should return null when no button exists with the passed name', () => {
      expect(calcButtons.calc(STRING)).toBe(null);
    });

    it('should call the calc method of the named button', () => {
      expect(calcButtons.calc(VALID_BUTTON.name)).toBe(NUMBER);
    });
  });

  describe('list()', () => {
    it('should return an empty array when there are no buttons', () => {
      expect(calcButtons.list()).toEqual([]);
    });

    it('should return the names of all of the added buttons', () => {
      calcButtons.add([VALID_BUTTON, ANOTHER_VALID_BUTTON]);

      expect(calcButtons.list()).toEqual([VALID_BUTTON.name, ANOTHER_VALID_BUTTON.name]);
    });
  });

  describe('clear()', () => {
    it('should clear all buttons', () => {
      calcButtons.add(VALID_BUTTON);
      calcButtons.clear();
      expect(calcButtons.list()).toEqual([]);
    })
  });
});
