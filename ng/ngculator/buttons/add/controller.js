'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * AddCtrl Controller
 * Adds the input from the last value.
 *
 * @class AddCtrl
 */
app.controller('AddCtrl', function (calcHistory, calcInput) {
  this.result = '';
  this.label = '+';

  this.calc = () => {
    this.result = +calcInput.value + +calcHistory.last[0];
    calcHistory.push(this.result);
  };
});
