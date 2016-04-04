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

    calcWasPressed: false,

    addDigit: (digit) => {
      const shouldStartOver = calcInput.value == 0 || calcInput.calcWasPressed;

      if (!digit.toString().match(/^[0-9\.-]$/)) {
        throw new Error('Invalid digit.');
      }

      if (_.isNumber(digit)) {
        if (shouldStartOver) {
          calcInput.value = '';
        }

        calcInput.value = calcInput.value + (calcInput.nextIsDecimal ? '.' : '') + digit;

        // Prepend input string with a zero, if it starts witha decimal point.
        calcInput.value = calcInput.value.substring(0,1) === '.' ? 0 + calcInput.value : calcInput.value;
        calcInput.nextIsDecimal = false;
        calcInput.calcWasPressed = false;

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
