'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * DisplayCtrl Controller
 * Makes calcHistory available to mbDisplay
 *
 * @class DisplayCtrl
 */
app.controller('DisplayCtrl', function (calcHistory) {
  this.history = calcHistory;
});
