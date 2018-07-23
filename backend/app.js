var express = require('express');
var path = require('path');

var mongoose = require('mongoose');

var logger = require('morgan');

/// Parsers
// var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Requiring routes
var routes = require('./routes/index');
var users = require('./routes/users');
var accounts = require('./routes/accounts');

var createError = require('http-errors');

var app = express();

mongoose.connect('mongodb://mongo:27017/reaccounts');
var db = mongoose.connection;
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
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
