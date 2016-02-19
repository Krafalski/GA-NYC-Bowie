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

// log
app.use( logger('dev') );




/*ROUTES*/
// home route
app.get('/', (req,res)=>res.send('<h1>YOU GOT DA HOMEPAGE!</h1>'))

// Burgers
app.use( '/burgers', burgerRoutes)

app.listen(port,()=> 
  console.log('Server Up! Ready to serve piping hot burgers on port', port,'//', new Date())
)
