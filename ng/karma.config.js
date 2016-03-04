const path = require('path');

module.exports = config => config.set({
  frameworks: ['jasmine', 'chai-sinon'],
  reporters: ['progress', 'coverage'],
  files: ['test.webpack.js'],
  preprocessors: {
    'test.webpack.js': ['webpack', 'sourcemap'],
  },
  browsers: ['PhantomJS'],
  webpack: require('./webpack.config'),
  coverageReporter: {
    dir: 'coverage/',
    reporters: [
      {type: 'text-summary'},
      {type: 'html'},
    ],
  },
  webpackMiddleware: {
    noInfo: 'errors-only',
  },
});
