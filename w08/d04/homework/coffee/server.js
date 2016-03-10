'use strict'

const express     = require ('express');
const logger      = require ('morgan');
const path        = require ('path');
const bodyParser = require ('body-parser');

const app         = express();
const PORT        =process.argv[2] || process.env.port || 3000;

const coffeeRoutes = require ('./routes/coffee');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')))

app.use(logger('dev'));
app.use('/coffee', coffeeRoutes)

app.get('/', (req, res)=> {
  res.sendFile('index.html');
})

app.listen(PORT, ()=>
 console.log (
   'coffee!!!!!! Now serving customer number (port):  ' , PORT
 ));
