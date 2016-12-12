const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, 'src', 'app.js')

const config = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    mainPath,
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath],
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css',

      }
    ],
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;