'use strict';

import angular from 'angular';
import template from '../button.html';

const app = angular.module('ngculator');

/**
 * mbAddButton Component
 * Add button component
 *
 * @class mbAddButton
 */
app.component('mbAddButton', {
  template: template,
  controller: 'AddCtrl',
});
