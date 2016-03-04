const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const reactWebpackConfig = require('./webpack.config');

new WebpackDevServer(webpack(reactWebpackConfig), {
  publicPath: '/reactulator/',
  contentBase: './reactulator/',
  inline: true,
  hot: true,
  stats: false,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  }
}).listen(3001, 'localhost', function (err) {
  if (err) {
    return console.warn('react server failed to start', err);
  }

  console.log('react webpack server listening on localhost:3001');
});
