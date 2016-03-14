import angular from 'angular';

angular.module('ngculator', []);
const appContext = require.context('.', true, /^(?!.*\.spec\.js$).*\.js$/);
appContext.keys().forEach(appContext);
