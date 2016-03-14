import angular from 'angular';
import template from '../button-template.html';

const app = angular.module('ngculator');

/**
 * SubtractCtrl Controller
 * Subtracts the input from the last value.
 *
 * @class SubtractCtrl
 */
app.controller('SubtractCtrl', function (history, calcInput) {
  this.result = '';
  this.label = '-';

  this.calc = () => {
    this.result = +history.last[0] - +calcInput.value;
    history.push(this.result);
  };
});

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
