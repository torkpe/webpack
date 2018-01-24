const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'client/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif|svg)$/i, loader: 'file-loader' },
    ],
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.jpg', '.png', '.gif', '.jpeg']
  },
}