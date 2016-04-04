'use strict';

import angular from 'angular';
import WeakMap from 'es6-weak-map';
import _ from 'lodash';

const app = angular.module('ngculator');

let CalculatorButtons = (function () {
  const privateProps = new WeakMap();

  /**
   * @class CalculatorButtons
   * Defines the calcButtons Service prototype
   */
  class CalculatorButtons {
    constructor (calcInput, calcHistory) {
      privateProps.set(this, {
        _buttons: {},
        calcInput,
        calcHistory
      });
    }

    /**
     * @method clear
     * Clears the button list
     */
    clear () {
      privateProps.get(this)._buttons = {};
    }

    /**
     * @method add
     * Adds a new button.
     * Buttons are objects that have a {String} name, {String} label, and {Function} calc
     * calc will be called with calc(previousValue, newValue).
     *
     * @param {Object} button
     */
    add (button) {
      const _buttons = privateProps.get(this)._buttons;
      const requiredProperties = {
    //  property: type
        name: 'string',
        label: 'string',
        calc: 'function'
      };

      // Require button parameter
      if (!button) {
        throw new ReferenceError('Missing button parameter.');
      }

      // Add an array of buttons
      if (_.isArray(button)) {
        return _.forEach(button, singleButton => {
          this.add(singleButton)
        });
      }

      // Validate button properties
      _.forEach(requiredProperties, (requiredType, key) => {
        const type = typeof button[key];

        if (type === 'undefined') {
          throw new ReferenceError(`Button is missing property: '${key}'.`);
        } else if (type !== requiredType) {
          throw new TypeError(`Incorrect type on button property: ${key} is a ${type}, but must be a ${requiredType}`);
        }
      });

      // Prevent duplicates
      if (_buttons[button.name]) {
        throw new Error(`Button with name ${button.name} already exists.`);
      }

      _buttons[button.name] = button;
    }

    /**
     * @method getLabel
     * Returns the label associated with the button name provided
     *
     * @param {String} name
     */
    getLabel (name) {
      const _buttons = privateProps.get(this)._buttons;
      const nameType = typeof name;

      if (nameType === 'undefined') {
        throw new ReferenceError('Missing name parameter');
      } else if (nameType !== 'string') {
        throw new TypeError('Name must be a string.');
      }

      if (!_buttons[name]) {
        return null;
      }

      return _buttons[name].label;
    }

    /**
     * @method calc
     * Calls the calc method of the button named
     *
     * @param {String} name
     */
    calc (name) {
      if (_.isUndefined(name)) {
        throw new ReferenceError('Button name not passed to calc.');
      }

      if (typeof name !== 'string') {
        throw new TypeError('Button name passed must be a string.');
      }

      const calcHistory = privateProps.get(this).calcHistory;
      const calcInput = privateProps.get(this).calcInput;

      const _buttons = privateProps.get(this)._buttons;

      const storedValue = calcHistory.last[0];
      const enteredValue = calcInput.value;

      const button = _buttons[name];

      calcInput.calcWasPressed = true;

      if (!button) {
        return null;
      }

      const result = button.calc(storedValue, enteredValue);

      calcHistory.push(calcInput.value);
      calcInput.value = result

      return result;
    }

    list () {
      const _buttons = privateProps.get(this)._buttons;

      return _.keys(_buttons);
    }
  }

  return CalculatorButtons;
})();

/**
 * calcButtons Service
 * Service that stores available calculator buttons.
 *
 * @class calcButtons
 */
app.service('calcButtons', CalculatorButtons);
