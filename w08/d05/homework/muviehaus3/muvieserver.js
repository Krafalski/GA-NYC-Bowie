'use strict';


const express       = require ('express');
const logger        = require ('morgan');
const path          = require ('path');
const bodyParser    = require ('body-parser');


const app           = express();
const PORT          = process.argv[2]  || process.env.port || 3000;

const muvieRoutes   = require ('./routes/muviehaus3');

app.use (bodyParser.urlencoded({extended : false}));
app.use (bodyParser.json());

app.use (express.static(path.join(__dirname,'public')));
app.use (express.static('./public/'));

app.use (logger('dev'));
app.use ('/movies', muvieRoutes);

app.get ('/', (req, res)=>{
  res.sendFile('index.html')
});





app.listen(PORT, ()=>
console.log('Out at the Movies! Now at port: ', PORT, '//', new Date ()));
