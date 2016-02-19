var express = require('express');
var morgan = require('morgan');
var request = require('request');

var app = express();

app.use(morgan('dev'));

app.use(express.static('./public/'))

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
    res.render('index.html.ejs');
});

var port = process.env.PORT || 3000;
var server = app.listen(port)
