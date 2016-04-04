'use strict';

import angular from 'angular';
import _ from 'lodash';

const app = angular.module('ngculator');

/**
 * NumberPadContl Controller
 * Controller for the ncNumberPad component.
 *
 * @class NumberPadCtrl
 */
app.controller('NumberPadCtrl', function (calcInput) {
  this.press = (value) => {
    calcInput.addDigit(value);
  };
});
