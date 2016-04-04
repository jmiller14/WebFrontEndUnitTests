'use strict';

import angular from 'angular';
import template from './nc-button-list.html';

// inlcude styles
import './nc-button-list.scss';

const app = angular.module('ngculator');

/**
 * ncButtonList Component
 * Button list component
 *
 * @class ncButtonList
 */
app.component('ncButtonList', {
  template: template,
  controller: 'ButtonListCtrl',
});
