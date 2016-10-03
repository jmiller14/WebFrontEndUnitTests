'use strict';

import angular from 'angular';

const app = angular.module('ngculator');

/**
 * halloweenFactory Factory
 * Stores the boolean value for whether the halloween checkbox is selected or not
 *
 * @class halloweenFactory
 */
app.factory('halloweenFactory', function () {
  const halloweenFactory = {
    isHalloween: false
  };

  return halloweenFactory;
});
