'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class CalculatorcalcHistory {
  constructor () {
    this.clear();
  }

  clear () {
    this._history = [0, 0, 0, 0, 0];
  }

  push (element) {
    this._history.unshift(element);

    // TODO: perhaps add a maximum calcHistory size option
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
 * calcHistory Service
 * Stores the calcHistory values from the calculator
 *
 * @class calcHistory
 */
app.service('calcHistory', CalculatorcalcHistory);
