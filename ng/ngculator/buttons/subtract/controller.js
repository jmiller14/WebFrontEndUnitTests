import angular from 'angular';

const app = angular.module('ngculator');

/**
 * SubtractCtrl Controller
 * Subtracts the input from the last value.
 *
 * @class SubtractCtrl
 */
app.controller('SubtractCtrl', function (calcHistory, calcInput) {
  this.result = '';
  this.label = '-';

  this.calc = () => {
    this.result = +calcHistory.last[0] - +calcInput.value;
    calcHistory.push(this.result);
  };
});
