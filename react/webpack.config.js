'use strict';
/**
 * Configuration for React webpack development server
 * TODO also allow building for production
 */

const webpack = require('webpack');
const path = require('path');

let config = {
  target: 'web',

  entry: './react/reactulator/index.jsx',

  output: {
    path: path.join(process.cwd(), '/react/reactulator/index.jsx'),
    pathInfo: true,
    publicPath: 'http://localhost:3001/reactulator/',
    filename: 'main.js'
  },

  resolve: {
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'reactulator',
    ],
    extentions: ['js', 'jsx'],
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
  {test: /\.jsx?$/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'], exclude: /node_modules/}
];

module.exports = config;
