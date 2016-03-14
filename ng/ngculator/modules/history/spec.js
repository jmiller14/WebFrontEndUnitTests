'use strict';

describe('calculatorHistory', () => {
  let history;

  beforeEach(angular.mock.module('ngculator'));
  beforeEach(inject(_history_ => {
    history = _history_;
  }));

  beforeEach(() => {
    history.clear();
  });

  describe('length', () => {
    it('should be initialised to 1', () => {
      expect(history.length).toBe(1);
    });

    it('should increase when items are added', () => {
      history.push(2);
      expect(history.length).toBe(2);
    });
  });

  describe('push()', () => {
    it('should push values to the internal array', () => {
      let pushedValue = {};

      history.push(pushedValue);
      expect(history.length).toBe(2);
      expect(history.last[0]).toBe(pushedValue);
    });

    it('should should save no more than 5 history values', () => {
      const FIRST = {};
      const SECOND = {};
      const THIRD = {};
      const FOURTH = {};
      const FIFTH = {};
      const SIXTH = {};

      history.push(FIRST);
      history.push(SECOND);
      history.push(THIRD);
      history.push(FOURTH);
      history.push(FIFTH);
      history.push(SIXTH);

      expect(history.length).toBe(5);
      expect(history.last[0]).toBe(SIXTH);
      expect(history.last[4]).toBe(SECOND);
      expect(history.last.indexOf(FIRST)).toBe(-1);
    });
  });

  describe('clear()', () => {
    it('should reset the history', () => {
      expect(history.length).toBe(1);
      history.push(1);
      expect(history.length).toBe(2);
      history.clear();
      expect(history.length).toBe(1);
    });
  });

  describe('last', () => {
    it('should return an array represtation of the history ordered from latest to oldest', () => {
      const OLDEST = {};
      const OLDER = {};
      const LATEST = {};

      history.push(OLDEST);
      history.push(OLDER);
      history.push(LATEST);

      expect(history.last.length).toBe(4);
      expect(history.last[0]).toBe(LATEST);
      expect(history.last[1]).toBe(OLDER);
      expect(history.last[2]).toBe(OLDEST);
    });
  });
});
