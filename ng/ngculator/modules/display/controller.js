'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * DisplayCtrl Controller
 * Makes history available to mbDisplay
 *
 * @class DisplayCtrl
 */
app.controller('DisplayCtrl', function (history) {
  this.history = history;
});
