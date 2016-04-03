'use strict';

import angular from 'angular';
import _ from 'lodash';

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

    /**
     * Clears the value of the input
     *
     * @method clear
     */
    clear: () => {
      calcInput.value = 0;

      return calcInput;
    },

    /**
     * Returns true if the value is greater than zero
     *
     * @method isPositive
     */
    isPositive: () => calcInput.value > 0,

    /**
     * Returns true is the value is an integer
     */
    isInteger: () => calcInput.value % 1 === 0,

    nextIsDecimal: false,

    addDigit: (digit) => {
      if (!digit.toString().match(/^[0-9\.-]$/)) {
        throw new Error('Invalid digit.');
      }

      if (_.isNumber(digit)) {
        if (calcInput.value == 0) {
          return calcInput.value = digit;
        }
        calcInput.value = calcInput.value + (calcInput.nextIsDecimal ? '.' : '') + digit;
        calcInput.nextIsDecimal = false;

        return

      } else if (digit === '-') {
        return calcInput.value = 0 - calcInput.value;
      } else if (digit  === '.' && calcInput.isInteger()) {
        calcInput.nextIsDecimal = true;
      }
    }
  };

  return calcInput;
});
