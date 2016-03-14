'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class CalculatorHistory {
  constructor () {
    this.clear();
  }

  clear () {
    this._history = [0, 0, 0, 0, 0];
  }

  push (element) {
    this._history.unshift(element);

    // TODO: perhaps add a maximum history size option
    if (this._history.length > 5) {
      this._history.pop();
    }

    return this;
  }

  get last () {
    return this._history;
  }

  get length () {
    return this._history.length;
  }
}

/**
 * history Service
 * Stores the history values from the calculator
 *
 * @class history
 */
app.service('history', CalculatorHistory);
