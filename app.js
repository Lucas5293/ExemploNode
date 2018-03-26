var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// método require(filename) tem por objetivo carregar módulos

var index = require('./routes/index');// Carrega objeto router do módulo /routes/index.js
var exemploRest = require('./routes/exemploRest');// Carrega objeto router do módulo /routes/exemploRest.js
var exemploBanco = require('./routes/exemploBanco');// Carrega objeto router do módulo /routes/exemploBanco.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Atribuindo as rotas as rotas carregadas acima
app.use('/', index);
app.use('/exemploRest', exemploRest);
app.use('/exemploBanco', exemploBanco);

/// Tratando os erros 404
app.use(function(req, res, next) {
    res.render('error');
    err.status = 404;
    next(err);
});

module.exports = app;