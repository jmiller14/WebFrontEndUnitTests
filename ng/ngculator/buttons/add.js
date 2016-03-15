'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

app.run((calcButtons) => {
  calcButtons.add({
    name: 'add',
    label: '+',
    calc: (previousValue, newValue) => {
      return +previousValue + +newValue;
    }
  });
});
