'use strict';

import angular from 'angular';
import WeakMap from 'es6-weak-map';

const app = angular.module('ngculator');

let CalculatorcalcHistory = (function () {
  const privateProps = new WeakMap();

  class CalculatorcalcHistory {
    constructor () {
      this.clear();
    }

    clear () {
      privateProps.set(this, {
        _history: [0, 0, 0, 0, 0]
      });
    }

    push (element) {
      const _history = privateProps.get(this)._history;

      _history.unshift(element);

      // TODO: perhaps add a maximum calcHistory size option
      if (_history.length > 5) {
        _history.pop();
      }

      return this;
    }

    get last () {
      const _history = privateProps.get(this)._history;

      return _history.slice();
    }

    get length () {
      const _history = privateProps.get(this)._history;

      return _history.length;
    }
  }

  return CalculatorcalcHistory;
})();

/**
 * calcHistory Service
 * Stores the calcHistory values from the calculator
 *
 * @class calcHistory
 */
app.service('calcHistory', CalculatorcalcHistory);
