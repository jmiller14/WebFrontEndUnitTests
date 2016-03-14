import angular from 'angular';
import ngculatorTpl from './ngculator.html';

const app = angular.module('ngculator');

app.controller('NgculatorCtrl', function (calcHistory, calcInput) {
  this.clear = () => {
    calcHistory.clear();
    calcInput.clear();
  };
});

app.component('ngculator', {
  template: ngculatorTpl,
  controller: 'NgculatorCtrl',
});
