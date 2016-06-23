'use strict';

const bcrypt      = require ('bcrypt');
const bodyParser  = require ('body-parser');
const express     = require ('express');
const jwt         = require ('express-jwt');
const session     = require ('express-session');
const jsonwebtoken= require ('jsonwebtoken');
const path        = require ('path');
const pgp         = require ('pg-promise');
const pgSession   = require ('connect-pg-simple')(session);
const salt        = bcrypt.genSaltSync(10);

const users       = express.Router();
var db            = ('./../db/pg');

const app         = express();

app.use (express.static('./public/'));
var userRoutes = require( path.join(__dirname, '/routes/users'));

app.use('/users', userRoutes)


app.use(session({
  store: new pgSession({
    pg : pg,
    conString : connectionString,
    tableName : 'session'
  }),
  secret: 'sooosecrett', // something we maybe want to save with dotenv *hint hint*
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}))



app.get('/', (req, res)=>{
  res.sendFile ('index.html')
})


var port = process.env.Port || 3000;
var server = app.listen(port, ()=>
console.log('user sessions lesson!', ' // ' , new Date()));
