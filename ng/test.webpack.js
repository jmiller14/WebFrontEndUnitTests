import 'angular';
import 'angular-mocks/angular-mocks';
import './ngculator';

beforeEach(angular.mock.module('ngculator'));

const testContext = require.context('.', true, /\.spec\.js$/);
testContext.keys().forEach(testContext);
