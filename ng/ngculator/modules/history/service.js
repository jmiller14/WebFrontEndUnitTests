'use strict';

import angular from 'angular';
import WeakMap from 'es6-weak-map';
import _ from 'lodash';

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

      if (_.isUndefined(element)) {
        throw new ReferenceError('Missing element to push to history.');
      }

      _history.unshift(element);
      _history.pop();

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
