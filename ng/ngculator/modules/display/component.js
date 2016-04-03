'use strict';

import angular from 'angular';
import template from './nc-display.html';

// include styles
import './nc-display.scss';

const app = angular.module('ngculator');

/**
 * ncDisplay Component
 * Displays the last 5 values
 *
 * @class ncDisplay
 */
app.component('ncDisplay', {
  template: template,
  controller: 'DisplayCtrl',
});
