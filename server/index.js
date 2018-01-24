import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfigDevelopment from '../webpack.config.development.js';

const dotenv = require('dotenv');

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '../build');
  const htmlPath = path.join(buildPath, 'index.html');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => res.sendFile(htmlPath));
}
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfigDevelopment);
  app.use(webpackMiddleware(compiler, {
    hot: true,
    publcPath: webpackConfigDevelopment.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
  app.route('*')
    .get((request, response) => {
      response.sendFile(path.join(__dirname, './public/index.html'));
    });
}

app.listen(3000, () => {
  console.log('server is now running')
})
export default app;
