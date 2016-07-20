const path = require('path');

module.exports = config => config.set({
    frameworks: ['mocha', 'chai-sinon'],
    reporters: ['progress', 'coverage'],
    files: [
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js",
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-mocks.js",
        "bootstrap-tests.js",
        "ngculator/ngculator.js",
        "ngculator/ngculator.test.js",
        "ngculator/**/*.js",
        "ngculator/**/*.test.js",
        "ngculator/**/*.html",
    ],
    logLevel: config.LOG_INFO,
    autoWatch: true,
    plugins: [
        "karma-mocha",
        "karma-chai-sinon",
        "karma-ng-html2js-preprocessor",
        "karma-babel-preprocessor",
        "karma-phantomjs-launcher",
        "karma-coverage",
    ],
    preprocessors: {
        "ngculator/**/*.html": ["ng-html2js"],
        "bootstrap-tests.js": ["babel"],
        "ngculator/ngculator.js": ["babel"],
        "ngculator/ngculator.test.js": ["babel"],
        "ngculator/**/*.js": ["babel"],
        "ngculator/**/*.test.js": ["babel"],
    },
    ngHtml2JsPreprocessor: {
        stripPrefix: "ngculator/",
        moduleName: "test-templates",
    },
    babelPreprocessor: {
        options: {
            presets: ["es2015", "angular"],
            sourceMap: "inline",
        },
    },
    coverageReporter: {
        type: 'html',
        dir: 'coverage/',
    },
    browsers: ["PhantomJS"]
});
