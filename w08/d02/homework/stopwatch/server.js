(function() {
  'use strict';

}());

const bodyParser    = require ('body-parser');
const express       = require ('express');
const logger        = require ('morgan');
const path          = require ('path');


const app           =  express ();
const _port         = process.env.port || 3000;

//const  taskRoutes   = require('./routes/tasks');

app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});


app.listen(_port, ()=>
 console.log('on off on off ON! Listening on', _port, new Date())
);
