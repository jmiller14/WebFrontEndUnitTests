import angular from 'angular';

angular.module('ngctulator', []);
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("./", true, /\.js$/));
