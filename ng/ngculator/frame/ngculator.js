import angular from 'angular';
import ngculatorTpl from './ngculator.html';

const app = angular.module('ngculator');

app.controller('NgculatorCtrl', function (history, calcInput) {
  this.clear = () => {
    history.clear();
    calcInput.clear();
  };
});

app.component('ngculator', {
  template: ngculatorTpl,
  controller: 'NgculatorCtrl',
});
