var express = require('express'); //require express module
var app = express(); //invoke express - call the function
//var ejs =

app.set('views', './views'); //for ejs - when I want to render HTML, go look for it in this file
//should be set by default but set here for demo
app.set('view engine', 'ejs'); //documentation says to include this

//req is a set object, you can console lot it to see that it is super huge
//we are looking for things called params and query this morning from the res object
//we declared res- in the function?  or not? confused.


app.get('/', function (req, res){
  //res.send('hello');
  res.render('greeting.html.ejs'); //function from ejs and the file that we created pulls file, sends it back to browser



  //replace res.send to res.render?

//EJS STUFF :



app.get('/fav-foods', function (req, res){
  var favFood =['banana','cupcakes','pizza','dumplings','fumplings'];
  res.render('fav_food.html.ejs'), {
    favFoods:favFoods
  }
})

});
//sample html: http://localhost:3000/greeting/class?greeting=salutations
app.get('/greeting/:name', function (req, res){

var name = req.params.name;
var greeting = req.query.greeting;


res.render ('greeting.html.ejs', {
  name:name,
  greeting:greeting
});
});

//doing hello:name - colon makes it variable
//to get it to work: http://localhost:3000/hello/colin
app.get('/hello/:name', function (req, res){
  var name = req.params.name;
  var greeting = req.query.greeting;
  //access greeting by typing http://localhost:3000/hello/colin?greeint=yoooo
  res.send(name + ' '+  greeting);
  //res.send(req.params.name);
});


////////////////////adding the math paths ////////////////


//going to enter http://localhost:3000/add?num1=2&num2=4
//should create in node: {num1: 2, num2: 4}
//get them by req.query
//maybe by req.query.name
// therefore caputre the value by doing below(var name can be different): var num1 = req.query.num1;
app.get('/add', function (req, res){
  //var check = "add hello"; this is just to check that the function works
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  num1 =parseInt(num1);
  num2 =parseInt(num2);
  var sum = num1 + num2;
  //res.send(num1 +  ' ' + num2);
  var sumString= sum.toString();
   res.send(sumString);
  //be sure to send back a string
} );

//going to enter http://localhost:3000/subtract?num1=2&num2=4
app.get('/subtract', function (req, res){
  //var check = "subtract hello"; this is just to check that the function works
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  num1 =parseInt(num1);
  num2 =parseInt(num2);
  var sum = num1 - num2;
  var sumString= sum.toString();
   res.send(sumString);
  //be sure to send back a string
} );

//going to enter http://localhost:3000/multiply?num1=2&num2=4
app.get('/multiply', function (req, res){
  //var check = "multiply hello"; this is just to check that the function works
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  num1 =parseInt(num1);
  num2 =parseInt(num2);
  var sum = num1 * num2;
  var sumString= sum.toString();
   res.send(sumString);
} );

//going to enter http://localhost:3000/divide?num1=2&num2=4
app.get('/divide', function (req, res){
  //var check = "divide hello"; this is just to check that the function works
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  num1 =parseInt(num1);
  num2 =parseInt(num2);
  var sum = num1 / num2;
  var sumString= sum.toString();
   res.send(sumString);
} );


//////////////// adding the math paths END////////////////


//////////////// create the dynamic query ////////////////
//still broken
app.get('math/:operator', function(req, res){
  var operator = req.params.operator;
  //var greeting = req.query.greeting;
  //access greeting by typing http://localhost:3000/hello/colin?greeint=yoooo
  res.send(name + ' '+  greeting);

});
//says that the thing after math will change
//localhost:3000/math/add
//req.params
//-->{oparator:'add'}
//get route /add


//comments req.params{}operator:'add'}
//get route /add

//////////////// create the dynamic query ////////////////



var port =3000; //set up server port
var server = app.listen(port, function (){
console.log ("the server has started");//will show up in node

}); //set up server






//////////////////EJS STUFF///////////////////////
