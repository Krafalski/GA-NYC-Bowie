'use strict';

var pgp         = require  ('pg-promise')({});

var cn          = {
  host          : 'localhost',
  port          :    5432,
  database      : 'movies',
  user          : 'karolinrafalski',
  password      : process.env DB_PASSWORD
};

var db          = pgp (cn);

function showMovie(req, res, next){
  console.log('show movie!');
  db.any('select * from movies')
  .then(function(data){
    res.rows = data;
    console.log(res.rows);
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}

function addMovie (req, res, next){
  //may need to use backticks instead of single quotes esxample from Vitaly Tomilov
  db.none ('INSERT INTO movies () VALUES ($//, $//,) RETURNING *', req.body)
  .then(function (movie){
    res.rows = movie;// alwasy one object, if you use 'returning *'
    next();
  })
  .catch(function(error){
    console.log(error)
  });
}

function edit
