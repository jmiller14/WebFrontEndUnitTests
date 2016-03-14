'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * InputCtrl
 * Controller for the MbInput directive
 *
 * @class InputCtrl
 */

 app.controller('InputCtrl', function (calcInput) {
   this.input = calcInput;
 });
