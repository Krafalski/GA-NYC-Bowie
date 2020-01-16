'use strict'

var methodOverride        = require('method-override');
var path                  = require('path');
var express               = require ('express');
var favicon               = require ('serve-favicon');
var bodyParser            = require ('body-parser');
var logger                = require ('morgan');
var dotenv                = require ('dotenv');
var db                    = require ('./db/pg');
var request               = require ('request');
var movieRoutes           = require( path.join(__dirname, '/routes/movies'));
var omdbapi               = 'www.omdbapi.com';


var howdy = 'howdy';



//env connect
dotenv.load();

//app settings
var app                   = express();
var port                  = process.env.PORT || 3000;

//parse incoming forms
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//change morgan to show short version of info
app.use(logger('short'));

//override with POST having ?_method=XXXX
app.use(methodOverride('_method'));

//static route to public
app.use(express.static(path.join(__dirname, 'public')));

//set views - ejs
app.set('view engine', 'ejs');

/* ROUTES */

//test route:
app.get('/boo', function(req, res){
  res.send('hello world');
});


//home page
app.get('/', db.showMovies, function (req,res){

res.render('pages/movie.ejs', {movies:res.rows} );

});

app.get('/movies/:mID',db.showMovies, function (req,res){

     var movieID = req.params;
     mID = parseInt(movieID.mID);
      // res.send('this res.rows ' + res.rows[mID-1].title);

    //if there is not a movie throw an error?
    // if(!(mID in movieData)){
    //   res.sendStatus(404);
    //   return;
    // }
      res.render('pages/tester.ejs', {
        movies:res.rows,
        mID:mID
      });
  })


//movieRoutes is a varible declared at the top
app.use('/movies', movieRoutes );


app.get('/search', function (req, res, next){
 var body =  request({url:'http://omdbapi.com', qs:req.query}, function (error, res, body){
return body;

  });
  res.send(body);
});







app.listen(port,()=>
  console.log('Server: Lights! Camera! Action! On port ' , port, '//',new Date())
);
