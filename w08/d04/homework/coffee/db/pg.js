'use strict';

var pgp        = require ('pg-promise')({});

var cn = {
  host: 'localhost',
  port: 5432,
  database:'coffee',
  user: 'karolinrafalski',
  password: process.env.DB_PASSWORD
};

var db              = pgp(cn);

function showCoffee( req, res, next){
  console.log('showCoffee!');
  db.any('select * from coffee')
  .then(function(data){
    res.rows = data;
    console.log(res.rows);
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}

function addCoffee( req, res, next){
  console.log('showCoffee!');
  db.one('INSERT INTO coffee (coffee_name, coffee_price) VALUES ($1, $2)',[req.body.coffee_name, req.body.coffee_price])
  .then(function(data){
    res.rows = data;
    console.log('success');
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}




module.exports.showCoffee = showCoffee;
module.exports.addCoffee = addCoffee;
