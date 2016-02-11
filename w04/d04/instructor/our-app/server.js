var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {


});

app.get('/sighting', function(req, res) {
  console.log(req.query)

  res.send(req.query.size)
});

app.get('/greeting/:name', function(req, res){
  // console.log(req.query)
  var name = req.params.name
  var greeting = req.query.greeting
  var sent = name + ' ' + greeting 
  res.render('greeting.html.ejs', {
  sent: sent
  });
});

app.get('/fav-foods', function(req, res){
  var favFoods = ['banana', 'cupcakes', 'pizza', 'dumplings', 'fumpling']

  res.render('fav_food.html.ejs', {
    favFoods: favFoods
  })
})




var port = 3000;

var server = app.listen(port, function() {
  console.log('server started')
})
