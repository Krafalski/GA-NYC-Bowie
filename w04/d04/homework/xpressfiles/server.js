var express = require('express');//require express module
var app = express();//invoke express
var fs = require('fs');//does express do this for us?
var sightingsDBText=fs.readFileSync('sightings.json', 'utf8');//link to json file sightings
var sightingsDB =JSON.parse(sightingsDBText);




//server
var port=3000;
var server = app.listen(port,function (){
  console.log('x-files helper server started!');
});

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res){
 var hello = 'Hello! Woot! Yeah!';
 var states = sightingsDBText.state;
  res.render ('welcome.html.ejs', {
    hello: hello
  });

app.get('/helper', function (req, res){
 var hello = 'Heck YES!';
  res.render ('welcome.html.ejs', {
    hello:hello
  });

});

app.get('/search', function (req, res){
  var city = req.query.city;
  res.render ('helper.html.ejs', {
    sightingsDB: sightingsDB,
    city:city
  });
  // console.log(sightingsDBText);
});

//
//   res.render('greeting.html.ejs'); //function from ejs and the file that we created pulls file, sends it back to browser
//
//
//   //replace res.send to res.render?
 });
