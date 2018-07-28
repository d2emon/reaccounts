'use strict';
import express from 'express';
import path from 'path';

import mongoose from 'mongoose';

import logger from 'morgan';

/// Parsers
// var favicon = require('serve-favicon');
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Requiring routes
import routes from './routes/index';
import users from './routes/users';
import accounts from './routes/accounts';

import createError from 'http-errors';

const app = express();

mongoose.connect('mongodb://mongo:27017/reaccounts');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log("OPENED"); });

/// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/// Adding routes
app.use('/', routes);
app.use('/users', users);
app.use('/accounts', accounts);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    // var err = new Error('Not Found');
    // err.status = 404;
    // next(err);
    next(createError(404));
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

export default app;
