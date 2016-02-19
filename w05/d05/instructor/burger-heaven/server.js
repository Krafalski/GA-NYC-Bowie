'use strict'

var path       = require('path');
var express    = require('express');
var favicon    = require('serve-favicon');
var logger     = require('morgan');
var path       = require('path');
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));

/* app settings */
var app = express();
var port = process.env.PORT || 3000;

// static route to public
app.use(express.static(path.join(__dirname, 'public')));


// log
app.use( logger('dev') );


/*Views*/
app.set('view engine', 'ejs');


/*ROUTES*/
// home route
app.get('/', (req,res)=>res.render('pages/home'))


// Burgers
app.use( '/burgers', burgerRoutes)

app.listen(port,()=> 
  console.log('Server Up! Ready to serve piping hot burgers on port', port,'//', new Date())
)
