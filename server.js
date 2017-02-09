const express = require('express');
const path = require('path');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const mainPath = path.resolve(__dirname, 'src', 'app.js');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AWS = require('aws-sdk');
const Promise = require('bluebird');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const AWSconfig = require('./server/config/aws.json'); // adjust for production
const sessionConfig = require('./server/config/session.json') // adjust for production
const blog = require('./server/routes/blog');
const User = require('./server/models/user');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = isDev ? 3000 : process.env.PORT;
const DB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/personal_profile';
const publicPath = path.resolve(__dirname, 'public');

const app = express();

app.set('json spaces', 2);
app.set('views', path.join(__dirname, 'server/templates'));
app.set('view engine', 'hbs');
app.use(express.static(publicPath));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use('/api', blog);

const compare = Promise.promisify(bcrypt.compare)
mongoose.Promise = Promise;
mongoose.connect(DB_URL);

const credentials = {
  accessKeyId: AWSconfig.AWSAccessKeyId,
  secretAccessKey: AWSconfig.AWSSecretKey,
};
AWS.config.update(credentials);

function checkPassword(password, hash) {
  return compare(password, hash)
  .then(res => {
    return res;
  })
  .catch(err => {
    return err
  })
}

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({username: username})
  .then((user) => {
    if (!user) {
      return done(null, false);
    }
    checkPassword(password, user.password)
    .then(isValid => {
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  })
  .catch(err => {
    if(err) return done(err);
  })
}));


app.get('/api/login', (req, res) => res.render('login'));
app.post('/api/login', passport.authenticate('local', {
  successRedirect: '/api/blog',
  failureRedirect: '/api/login',
}));

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/api/login');
});

if(isDev) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
