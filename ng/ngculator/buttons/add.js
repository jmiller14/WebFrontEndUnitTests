'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class AddButton {
  constructor (calcButtons) {
    this.name = 'add';
    this.label = '+';
  }

  calc (previousValue, newValue) {
    return +previousValue + +newValue;
  }
}

app.service('addButton', AddButton);

// Instanciates addButton
app.run((addButton, calcButtons) => {
  calcButtons.add(addButton)
});
