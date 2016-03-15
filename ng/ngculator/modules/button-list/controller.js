'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * ButtonListCtrl Controller
 * Controller for the ncButton component.
 *
 * @class ButtonListCtrl
 */
app.controller('ButtonListCtrl', function (calcButtons) {
  this.buttonNames = calcButtons.list();
  this.buttons = calcButtons;
});
