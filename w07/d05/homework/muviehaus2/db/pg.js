(function() {
  'use strict';

}());
var pgp           = require ('pg-promise')({

});

var cn = {
  host: 'localhost',
  port: 5432,
  database:'movies2',
  user: 'karolinrafalski',
  password: process.env.DB_PASSWORD
};



var db           = pgp(cn);

function showMovies (req, res, next)  {
  db.any('select * from movies')
  .then(function(data){
    res.rows= data;
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}

function showMovie (req, res, next){
  console.log(req.params);
  db.any('select * from movies where id = $1',[req.params.id])
  .then(function(data){
    res.rows= data;
    next();
  })
  .catch(function(error){
    console.log(error);
  });

}


module.exports.showMovies = showMovies;
module.exports.showMovie  = showMovie;
