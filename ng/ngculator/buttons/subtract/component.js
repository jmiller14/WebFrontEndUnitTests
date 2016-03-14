'use strict';

import angular from 'angular';
import template from '../button.html';

const app = angular.module('ngculator');

/**
 * ncSubtractButton Compoent
 * Subtraction button component
 *
 * @class ncSubtractButton
 */
app.component('ncSubtractButton', {
  template: template,
  controller: 'SubtractCtrl',
});
