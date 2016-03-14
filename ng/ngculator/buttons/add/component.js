'use strict';

import angular from 'angular';
import template from '../button.html';

const app = angular.module('ngculator');

/**
 * ncAddButton Component
 * Add button component
 *
 * @class mbAddButton
 */
app.component('ncAddButton', {
  template: template,
  controller: 'AddCtrl',
});
