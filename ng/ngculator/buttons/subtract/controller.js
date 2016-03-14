import angular from 'angular';

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
