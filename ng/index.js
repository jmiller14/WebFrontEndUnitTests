const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const ngWebpackConfig = require('./webpack.config');

new WebpackDevServer(webpack(ngWebpackConfig), {
  publicPath: '/ngctulator/',
  contentBase: './ngctulator/',
  inline: true,
  hot: true,
  stats: false,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  }
}).listen(3002, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('ng webpack server listening on localhost:3002');
});
