'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class DivideButton {
  constructor (calcButtons) {
    this.name = 'divide';
    this.label = '÷';
  }

  calc (previousValue, newValue) {
    if (!newValue) {
      return 'Error: Divide by zero';
    }

    return +previousValue / +newValue;
  }
}

app.service('divideButton', DivideButton);

// Instanciates addButton
app.run((divideButton, calcButtons) => {
  calcButtons.add(divideButton)
});
