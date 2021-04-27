const path = require('path');
// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const options = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js'
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    // new webpack.DllReferencePlugin({
    //   manifest: require(path.resolve(__dirname, '../lib', 'manifest.json')),
    //   context: path.resolve(__dirname)
    // })
  ],
  optimization: {
    minimize: false,
    // 压缩js
    minimizer: [
      new TerserPlugin({
        cache: false
      })
    ]
  }
}

module.exports = merge(webpackConfig, options);