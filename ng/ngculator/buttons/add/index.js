import angular from 'angular';
import template from '../button-template.html';

const app = angular.module('ngculator');

/**
 * AddCtrl Controller
 * Adds the input from the last value.
 *
 * @class AddCtrl
 */
app.controller('AddCtrl', function (history, calcInput) {
  this.result = '';
  this.label = '+';

  this.calc = () => {
    this.result = +calcInput.value + +history.last[0];
    history.push(this.result);
  };
});

/**
 * mbAddButton Compoent
 * Add button component
 *
 * @class mbAddButton
 */
app.component('mbAddButton', {
  template: template,
  controller: 'AddCtrl',
});
