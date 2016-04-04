'use strict';

import angular from 'angular';
import template from './nc-number-pad.html';

// include styles
import './nc-number-pad.scss'

const app = angular.module('ngculator');

/**
 * cdNumberPad
 * Number pad component for the calculator input.
 *
 * @class ncInput
 */
 app.component('ncNumberPad', {
   template: template,
   controller: 'NumberPadCtrl'
 });
