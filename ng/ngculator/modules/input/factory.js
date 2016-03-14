'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * calcInput Factory
 * Stores the user input value
 *
 * @class calcInput
 */
app.factory('calcInput', function () {
  const calcInput = {
    value: 0,
    clear: () => {
      calcInput.value = 0;

      return calcInput;
    }
  };

  return calcInput;
});
