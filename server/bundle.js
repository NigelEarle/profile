const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./../webpack.config.js');
const path = require('path');
const fs = require('fs');
const mainPath = path.resolve(__dirname, '..', 'src', 'app.js');

module.exports = () => {
  let bundleStart = null;
  const compiler = Webpack(webpackConfig);

  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', () => {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  const bundler = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', 'src'),
    quiet: false,
    noInfo: true,
    stats: {
      colors: true,
    },
  });


  bundler.listen(8080, 'localhost', () => { console.log('Building project please wait...') })
};