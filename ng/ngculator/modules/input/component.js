'use strict';

import angular from 'angular';
import template from './nc-input.html';

const app = angular.module('ngculator');

/**
 * ncInput
 * Input component for the calculator input.
 *
 * @class ncInput
 */
 app.component('ncInput', {
   template: template,
   controller: 'InputCtrl'
 });
