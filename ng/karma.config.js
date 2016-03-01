const path = require('path');

module.exports = config => config.set({
  frameworks: ['jasmine', 'chai-sinon'],
  reporters: ['progress'],
  files: ['ngculator/index.js', 'test.webpack.js'],
  preprocessors: {
    'ngculator/index.js': ['webpack'],
    'test.webpack.js': ['webpack'],
  },
  browsers: ['PhantomJS2'],
  webpack: require('./webpack.config'),
  webpackMiddleware: {
    noInfo: 'errors-only',
  },
});
