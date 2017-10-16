'use strict';
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const config = require('../config/');
const logger = require('../applogger');
const passport = require('./passport/passport');
const connectflash = require('connect-flash');

function createApp() {
  const app = express();
  return app;
}

function setupStaticRoutes(app) {
  app.use(express.static(path.resolve(__dirname, '../', 'webclient')));
  return app;
}

function setupRestRoutes(app) {
  // console.log('Inside service setupRestRoutes');
  app.use('/users', require(path.join(__dirname, './users')));
  app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, './pnf.html'), 404);
  });
  app.use(function(req, res) {
    let err = new Error('Resource not found');
    err.status = 404;
    return res.status(err.status).json({
      error: err.message
    });
  });

  app.use(function(err, req, res) {
    logger.error('Internal error in watch processor: ', err);
    return res.status(err.status || 500).json({
      error: err.message
    });
  });

  return app;
}

function setupMiddlewares(app) {
  //  For logging each requests
  app.use(morgan('dev'));
  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(passport.initialize());
   app.use(passport.session());
   app.use(connectflash());
app.use(require('express-session')({secret: 'accesskey',resave: true,
    saveUninitialized: true}));

  const compression = require('compression');
  app.use(compression());

  app.use(function(req, res, next)
  {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

  return app;
}

function setupWebpack(app) {
  if (config.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const webpackConfig = require('../webpack.config.js');
    const webpackCompiler = webpack(webpackConfig);

    app.use(webpackHotMiddleware(webpackCompiler));
    app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
      colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}));
    // app.use(webpackDevMiddleware(webpackCompiler, {
    //   noInfo: true,
    //   publicPath: webpackConfig.output.publicPath
    // }));
  }
  return app;
}

// App Constructor function is exported
module.exports = {
  createApp: createApp,
  setupStaticRoutes: setupStaticRoutes,
  setupRestRoutes: setupRestRoutes,
  setupMiddlewares: setupMiddlewares,
  setupWebpack: setupWebpack
};
