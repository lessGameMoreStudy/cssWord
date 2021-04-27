const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod');

webpack(webpackConfig, (err, status) => {
  if(err || status.hasErrors()) {
    console.log('编译失败了')
  }
})