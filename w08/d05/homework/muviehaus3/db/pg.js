'use strict';

var pgp         = require  ('pg-promise')({});

var cn          = {
  host          : 'localhost',
  port          :    5432,
  database      : 'movies',
  user          : 'karolinrafalski',
  password      : process.env.DB_PASSWORD
};

var db          = pgp (cn);


function showMovies(req, res, next){
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

function showMovie (req, res, next){
  console.log(req.params);
  db.any('select * from movies where id = $1',[req.params.id])
  .then(function(data){
    res.rows = data;
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}

function editMovie (req, res, next){
  console.log ('in edit movie pg.js');
  db.any('UPDATE movies SET showtimes=$1 where id = $2', [req.body.showtimes, req.params.id])
  .then(function(data){
    res.rows = data;
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}

function deleteMovie (req, res, next) {
  console.log('delete time! from pg.js')
  db.any('DELETE FROM movies WHERE id = $1', [req.params.id])
  .then(function(data){
    res.rows = data;
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}

//will need to add/change for when going to OMDB
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

module.exports.showMovies     = showMovies;
module.exports.showMovie      = showMovie;
module.exports.editMovie      = editMovie;
module.exports.deleteMovie    = deleteMovie;
// module.exports.addMovie       = addMoive;
