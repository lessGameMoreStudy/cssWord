const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev');

const compiler = webpack(webpackConfig);
const options = Object.assign({},webpackConfig.devServer, {
  open: true
})
const server = new webpackDevServer(compiler, options);

server.listen(8081, () => {
  console.log('listening at http://localhost:8081');
})