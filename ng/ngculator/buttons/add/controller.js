'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * AddCtrl Controller
 * Adds the input from the last value.
 *
 * @class AddCtrl
 */
app.controller('AddCtrl', function (history, calcInput) {
  this.result = '';
  this.label = '+';

  this.calc = () => {
    this.result = +calcInput.value + +history.last[0];
    history.push(this.result);
  };
});
