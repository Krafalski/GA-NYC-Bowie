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

app.get('/city', function(req, res) {
    console.log(req.query.city);
    request({url: 'http://api.openweathermap.org/data/2.5/weather',
             qs: {q: req.query.city, APPID: '28fd61a3ac76be235a538db4c858c8a9', units: 'metric'},
             json: true}, function(err, apires, body) {
                 // res.send(body);
                 // body = JSON.parse(body);
                 res.render('city.html.ejs', {temp: body.main.temp,
                                              desc: body.weather[0].description});
    });
    // res.render('city.html.ejs');
});

var port = process.env.PORT || 3000;
var server = app.listen(port)
