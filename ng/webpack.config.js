'use strict';
/**
 * Configuration for Angular webpack development server
 * TODO also allow building for production
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtractor = new ExtractTextPlugin('public/ng/main.css');

let config = {
  target: 'web',

  entry: {},
  output: {},

  resolve: {
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'ngculator',
    ],
    extentions: ['js', 'html'],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: 'development' === process.env.NODE_ENV,
      __STAGING__: 'staging' === process.env.NODE_ENV,
      __PRODUCTION__: 'production' === process.env.NODE_ENV,
      __CURRENT_ENV__: '\'' + (process.env.NODE_ENV) + '\'',
    }),
    cssExtractor,
  ],

  module: {
    noParse: /\.min\.js/
  },

  node: {
   net: 'empty',
   tls: 'empty',
   dns : 'empty'
  }
};

if ('test' !== process.env.NODE_ENV) {
  config.entry = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    './ng/ngculator/index.js',
  ];

  config.output = {
    path: path.join(process.cwd(), '/ng/ngculator/index.js'),
    pathInfo: true,
    publicPath: 'http://localhost:3002/ngculator/',
    filename: 'main.js'
  };

  config.devtool = 'source-map';

  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    cssExtractor
  ]);
}
else {
  config.module.preLoaders = [{
    test: /\.js$/,
    exclude: [
      /node_modules/,
      /test.webpack.js/,
      /\.spec\.js$/,
    ],
    loader: 'isparta-instrumenter',
    query: {
      babel: {
        presets: ['es2015', 'angular']
      },
    },
  }];
  config.devtool = 'source-map';

  config.plugins = [
    cssExtractor
  ];
}


config.module.loaders = [
  {test: /\.js$/, loaders: ['ng-annotate', 'babel?presets[]=es2015&presets[]=angular&plugins[]=lodash'], exclude: /node_modules/},
  {test: /\.html$/, loaders: ['html']},
  {test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'autoprefixer', 'sass?sourceMap']},
  {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: 'file'},
];

module.exports = config;
