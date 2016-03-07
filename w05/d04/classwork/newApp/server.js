var express = require('express');
var morgan = require('morgan');
var db = require('./db/pg');
var dotenv =require('dotenv');
var app = express();

dotenv.load()

app.use(express.static('./public/'));
app.use(morgan('short'));

app.set('views', './views');
app.set('view engine', 'ejs');


// var client = new pg.Client(connectionString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT * FROM city WHERE id = 1', function(err, result) {
//     if (err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows);
//     client.end()
//   });
// });

app.get('/', db.showKabul, function(req, res) {
  res.render('kabul.html.ejs', res.rows)
  // console.log('hey')
});

app.get('/allcities', db.showAllCities, function (req, res){
  //res.send(res.rows); works raw json
  res.render('cities.html.ejs', {cities: res.rows});

})


var port = process.env.PORT || 3000;
var server = app.listen(port)
