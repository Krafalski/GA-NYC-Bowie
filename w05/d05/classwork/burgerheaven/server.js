'use strict'
var methodOverride = require('method-override');
var path       = require('path');
var express    = require('express');
var favicon    = require('serve-favicon');
var bodyParser = require('body-parser');
var logger     = require('morgan');
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));




/* app settings */
var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static( path.join(__dirname, '/public')));
app.use(methodOverride('_method'))

// log
app.use( logger('dev') );



/*ROUTES*/
// home route
app.get('/', (req,res)=>res.render('pages/home.html.ejs'))

// Burgers
app.use( '/burgers', burgerRoutes)

app.listen(port,()=>
  console.log('Server Up! Ready to serve piping hot burgers on port', port,'//', new Date())
)
