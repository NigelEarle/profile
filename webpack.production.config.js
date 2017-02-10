const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

module.exports = {
  entry: [
    path.join(__dirname, 'src/app.js')
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      inject: 'body',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          'presets': [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /\.jpe?g$|\.png$|\.svg$|\.pdf$/i,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader', 
            loader: [
              'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
              'postcss-loader',
            ]
          }
        )
      }
    ]
  },
  postcss: function(webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack,
        path: ['./src'],
      }),
      cssnext({ browsers: ['last 2 versions', 'IE > 10'] }),
      postcssReporter({ clearMessages: true }),
    ];
  },
};