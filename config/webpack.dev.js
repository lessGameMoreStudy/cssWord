const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

const options = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  },
  mode: 'development',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    quiet: true,
    port: 8081
  },
  optimization: {
    minimize: false,
    // 压缩js
    minimizer: [
      new TerserPlugin({
        cache: true
      })
    ]
  }
}

module.exports = merge(webpackConfig, options)