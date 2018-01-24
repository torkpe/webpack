const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      // Compression specific options
      compress: {
        // remove warnings
        warnings: false,
        // Drop console statements
        drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'server/public/index.html'),
      filename: 'index.html'
    }),
    new Dotenv({
      path: './env',
      systemvars: true
    })
  ],
});
