'use strict';

import angular from 'angular';
import template from './nc-display.html';

const app = angular.module('ngculator');

/**
 * mbDisplay Component
 * Displays the last 5 values
 *
 * @class DisplayCtrl
 */
app.component('ncDisplay', {
  template: template,
  controller: 'DisplayCtrl',
});
