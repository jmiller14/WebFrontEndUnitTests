'use strict';

import angular from 'angular';
import template from './template.html';

const app = angular.module('ngculator');

/**
 * calcInput Factory
 * Stores the user input value
 *
 * @class calcInput
 */
app.factory('calcInput', function () {
  let value = 0;

  const calcInput = {
    value,
    clear: () => {
      calcInput.value = 0;

      return calcInput;
    }
  };

  return calcInput;
});

/**
 * InputCtrl
 * Controller for the MbInput directive
 *
 * @class InputCtrl
 */

 app.controller('InputCtrl', function (calcInput) {
   this.input = calcInput;
 });

/**
 * MbInput
 * Input component for the calculator input.
 *
 * @class MbInput
 */
 app.component('mbInput', {
   template: template,
   controller: 'InputCtrl'
 });
