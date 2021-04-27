const path = require('path');
const { web } = require('webpack');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const vendors = [
  'react',
  'react-dom',
]

module.exports = {
  entry: {
    vendor: vendors
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../lib'),
    filename: '[name].dll.js',
    library: '[name]_lib'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../../lib', 'manifest.json'),
      name: '[name]_lib',
      context: ROOT_PATH
    })
  ]
}