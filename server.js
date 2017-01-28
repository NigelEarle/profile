const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const AWS = require('aws-sdk');
const Promise = require('bluebird');

const AWSconfig = require('./server/config/aws.json'); // adjust for production
const blog = require('./server/routes/blog');
const work = require('./server/routes/work');

const isProduction = process.env.NODE_ENV === 'production';
const DB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/personal_profile';
const PORT = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

const app = express();
mongoose.Promise = Promise;
mongoose.connect(DB_URL);

const credentials = {
  accessKeyId: AWSconfig.AWSAccessKeyId,
  secretAccessKey: AWSconfig.AWSSecretKey,
};
AWS.config.update(credentials);

app.set('views', path.join(__dirname, 'server/templates'));
app.set('view engine', 'hbs');
app.use(express.static(publicPath));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use('/api', blog);
app.use('/api', work);

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
