'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class SubtractButton {
  constructor (calcButtons) {
    this.name = 'subtract';
    this.label = '-';
  }

  calc (previousValue, newValue) {
    return +previousValue - +newValue;
  }
}

app.service('subtractButton', SubtractButton);

// Instanciates addButton
app.run((subtractButton, calcButtons) => {
  calcButtons.add(subtractButton)
});
