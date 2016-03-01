'use strict';

/**
 * A simple HTTP server that serves both testing projects. You can run it with
 * `node .`. Using this is optional, but if you don't use it you will have to
 * build and serve the projects on your own.
 */
const connect = require('connect');
const serveStatic = require('serve-static');

const app = connect();
app.use(serveStatic("./shared-styles"));
app.use(serveStatic("./public"));
app.listen(3000, () => console.log(`dev server listening on localhost:3000
http://localhost:3000/ng
http://localhost:3000/react`));

if ('production' !== process.env.NODE_ENV) {
  require('./react');
  /*
  new WebpackDevServer(webpack(ngWebpackConfig), {
    publicPath: '/calcul/',
    contentBase: './ng/calcul/',
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

    console.log('angular webpack server listening on localhost:3002');
  });
  */
}
