'use strict';

import angular from 'angular';
import template from './nc-button.html';

const app = angular.module('ngculator');

/**
 * ncButton Component
 * Button component
 *
 * @class ncButton
 */
app.component('ncButton', {
  template: template,
  controller: 'ButtonCtrl',
  bindings: {
    name: '@'
  }
});
