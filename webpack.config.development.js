const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'server/public/index.html'),
      filename: 'index.html'
    }),
  ],
});
