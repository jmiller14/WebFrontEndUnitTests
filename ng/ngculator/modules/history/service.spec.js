'use strict';

describe('calculatorcalcHistory', () => {
  let calcHistory;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject(_calcHistory_ => {
    calcHistory = _calcHistory_;
  }));

  beforeEach(() => {
    calcHistory.clear();
  });

  describe('length', () => {
    it('should be initialised to 5', () => {
      expect(calcHistory.length).toBe(5);
    });

    it('should remain the same as new items are added', () => {
      calcHistory.push(2);
      expect(calcHistory.length).toBe(5);
    });
  });

  describe('push()', () => {
    it('should push values to the internal array', () => {
      let pushedValue = {};

      calcHistory.push(pushedValue);
      expect(calcHistory.length).toBe(5);
      expect(calcHistory.last[0]).toBe(pushedValue);
    });

    it('should should save no more than 5 calcHistory values', () => {
      const FIRST = {};
      const SECOND = {};
      const THIRD = {};
      const FOURTH = {};
      const FIFTH = {};
      const SIXTH = {};

      calcHistory.push(FIRST);
      calcHistory.push(SECOND);
      calcHistory.push(THIRD);
      calcHistory.push(FOURTH);
      calcHistory.push(FIFTH);
      calcHistory.push(SIXTH);

      expect(calcHistory.length).toBe(5);
      expect(calcHistory.last[0]).toBe(SIXTH);
      expect(calcHistory.last[4]).toBe(SECOND);
      expect(calcHistory.last.indexOf(FIRST)).toBe(-1);
    });
  });

  describe('clear()', () => {
    it('should reset the calcHistory', () => {
      calcHistory.push(1);
      calcHistory.clear();
      expect(calcHistory.last).toEqual([0,0,0,0,0]);
    });
  });

  describe('last', () => {
    it('should return an array represtation of the calcHistory ordered from latest to oldest', () => {
      const OLDEST = {};
      const OLDER = {};
      const LATEST = {};

      calcHistory.push(OLDEST);
      calcHistory.push(OLDER);
      calcHistory.push(LATEST);

      expect(calcHistory.last[0]).toBe(LATEST);
      expect(calcHistory.last[1]).toBe(OLDER);
      expect(calcHistory.last[2]).toBe(OLDEST);
    });
  });
});
