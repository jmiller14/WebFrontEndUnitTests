import angular from 'angular';
import ngculatorTpl from './ngculator.html';

const app = angular.module('ngculator');

app.controller('NgculatorCtrl', function () {
  this.result = '';

  this.add = (a, b) => {
    this.result = +a + +b;
  };

  this.clear = () => {
    this.result = '';
  };
});

app.component('ngculator', {
  template: ngculatorTpl,
  controller: 'NgculatorCtrl',
});
