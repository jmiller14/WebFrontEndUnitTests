'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

class ModButton {
  constructor (calcButtons) {
    this.name = 'mod';
    this.label = 'mod';
  }

  calc (previousValue, newValue) {
    if (!newValue) {
      return 'Error: Divide by zero';
    }

    return +previousValue % +newValue;;
  }
}

app.service('modButton', ModButton);

// Instantiates modButton
app.run((modButton, calcButtons) => {
  calcButtons.add(modButton)
});
