'use strict';
/**
 * Configuration for Angular webpack development server
 * TODO also allow building for production
 */

const webpack = require('webpack');
const path = require('path');

let config = {
  target: 'web',

  entry: './ng/ngctulator/index.js',

  output: {
    path: path.join(process.cwd(), '/ng/ngctulator/index.js'),
    pathInfo: true,
    publicPath: 'http://localhost:3002/ngctulator/',
    filename: 'main.js'
  },

  resolve: {
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'ngctulator',
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
  ],

  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],

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
    config.entry,
  ];
}

config.devtool = 'eval-source-map';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
]);

config.module.loaders = [
  {test: /\.js$/, loaders: ['ng-annotate', 'babel?presets[]=es2015&presets[]=angular'], exclude: /node_modules/},
  {test: /\.html$/, loaders: ['html']},
];

module.exports = config;
