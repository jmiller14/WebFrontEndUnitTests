'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class MultiplyButton {
  constructor (calcButtons) {
    this.name = 'multiply';
    this.label = '×';
  }

  calc (previousValue, newValue) {
    return +previousValue * +newValue;
  }
}

app.service('multiplyButton', MultiplyButton);

// Instanciates addButton
app.run((multiplyButton, calcButtons) => {
  calcButtons.add(multiplyButton)
});
