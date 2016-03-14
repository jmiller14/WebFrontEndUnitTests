import angular from 'angular';
import template from '../button.html';

const app = angular.module('ngculator');

/**
 * mbSubtractButton Compoent
 * Subtraction button component
 *
 * @class mbSubtractButton
 */
app.component('mbSubtractButton', {
  template: template,
  controller: 'SubtractCtrl',
});
