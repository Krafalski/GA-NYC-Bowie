var express = require('express');
var morgan = require('morgan');
var request = require('request');
var  weather = express.Router();

var APPID = '6e5f63591a0038e64bd07be8558e32b7';
//example of an api call with an API key
var apiCall = 'api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=APPID '

//call by city
weather.get('/city', function (req, res){
  request.get({url:apiCall, qs: req.query}, parseData.bind(res));
});
//call by zip
weather.get('/zip', function (req, res){
  request.get({url:apiCall, qs:req.query}, parseData.bind(res));
});

var weatherData ='';

var app = express();

app.use(morgan('dev'));

app.use(express.static('./public/'));

app.set('views', './views');
app.set('view engine', 'ejs');

// route for city will be: http://localhost:3000/city?city=London
// route for zip code will be: http://localhost:3000/zip?zip=10543
app.get('/', function(req, res) {
    res.render('index.html.ejs');
});


app.get('/city', function (req, res){
  console.log(req.query.city);
  request({rul: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98', json:true, qs:{q:req.query.city, APPID: '6e5f63591a0038e64bd07be8558e32b7', units:'imperial'}}), function (err, apiRes, body){
  res.send(body);
}
//  res.render('city.html.ejs');
});


function parseData(err, response, body) {    //body is jsut JSON string when it comes
  var resData = JSON.parse(body);


  console.log(resData);
  console.log(interestingData);
   this.send(interestingData);

}

var port = process.env.PORT || 3000;
var server = app.listen(port);
