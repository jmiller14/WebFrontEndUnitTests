import angular from 'angular';
import template from './template.html';

const app = angular.module('ngculator');

/**
 * DisplayCtrl Controller
 * Makes history available to mbDisplay
 *
 * @class DisplayCtrl
 */
app.controller('DisplayCtrl', function (history) {
  this.history = history;
});

/**
 * mbDisplay Component
 * Displays the last 5 values
 *
 * @class DisplayCtrl
 */
app.component('mbDisplay', {
  template: template,
  controller: 'DisplayCtrl',
});
