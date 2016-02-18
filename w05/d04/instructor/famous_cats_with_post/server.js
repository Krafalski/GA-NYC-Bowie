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

app.get('/famous-cats', db.showAllCats, function(req, res) {
  res.render('famous_cats.html.ejs', {cats: res.rows})
})

app.get('/famous-cats/new', function(req, res) {
  res.render('new_cats.html.ejs');
})

app.post('/famous-cats', db.addCat, function(req, res) {

  res.render('success view')
  res.redirect('/famous-cats')
})


var port = process.env.PORT || 3000;
var server = app.listen(port)
