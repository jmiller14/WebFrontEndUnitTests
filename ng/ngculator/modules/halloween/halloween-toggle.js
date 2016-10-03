'use strict';

import angular from 'angular';

import template from './halloween-toggle.html';

// include styles
import './halloween-toggle.scss'

const app = angular.module('ngculator');

/**
 * Toggle/Switch component for the calculator "halloween" mode.
 *
 * @class ncSpooky
 */
 app.component('ncSpooky', {
   template: template,
   controller: 'SpookyCtrl'
 });

/**
 * SpookyCtrl Controller
 * Controller for the ncSpooky component.
 *
 * @class SpookyCtrl
 */
app.controller('SpookyCtrl', function ($document, halloweenFactory) {
  this.halloweenFactory = halloweenFactory;

  this.toggle = () => {
    halloweenFactory.isHalloween = !halloweenFactory.isHalloween;
  };
});
