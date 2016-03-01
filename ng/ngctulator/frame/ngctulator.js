import angular from 'angular';
import ngctulatorTpl from './ngctulator.html';

function NgctulatorCtrl($http) {
  console.log($http);
  this.result = '';

  this.add = (a, b) => {
    this.result = +a + +b;
  };

  this.clear = () => {
    this.result = '';
  };
}

angular.module('ngctulator')
.component('ngctulator', {
  template: ngctulatorTpl,
  controller: NgctulatorCtrl,
});
