const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const app = express();

const blog = require('./server/routes/blog');
const isProduction = process.env.NODE_ENV === 'production';
const PORT = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.use('/api', blog);

if(!isProduction) {
  const bundle = require('./server/bundle.js');
  bundle();

  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080',
    });
  });
}

proxy.on('error', e => console.log('Could not connect to proxy, please try again...'))

app.listen(PORT, () => console.log(`Server running at ${PORT}`));