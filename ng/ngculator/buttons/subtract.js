'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

app.run((calcButtons) => {
  calcButtons.add({
    name: 'subtract',
    label: '-',
    calc: (previousValue, newValue) => {
      return +previousValue - +newValue;
    }
  });
});
