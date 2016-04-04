'use strict';

import angular from 'angular';
import _ from 'lodash';

const app = angular.module('ngculator');

/**
 * NumberPadController Controller
 * Controller for the ncNumberPad component.
 *
 * @class ButtonCtrl
 */
app.controller('NumberPadCtrl', function (calcInput) {
  this.press = (value) => {
    calcInput.addDigit(value);
  };
});
