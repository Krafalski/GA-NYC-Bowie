var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var db = require('./db/pg');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(express.static('./public/'))

app.set('views', './views')
app.set('view engine', 'ejs')


var port = process.env.PORT || 3000;
var server = app.listen(port)
