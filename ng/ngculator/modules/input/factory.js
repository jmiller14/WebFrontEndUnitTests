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
