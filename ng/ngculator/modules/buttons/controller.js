'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * ButtonCtrl Controller
 * Controller for the ncButton component.
 *
 * @class ButtonCtrl
 */
app.controller('ButtonCtrl', function (calcButtons) {
  this.label = calcButtons.getLabel(this.name);
  this.press = () => {
    calcButtons.calc(this.name);
  };
});
