(function() {
  'use strict';

}());
var pgp           = require ('pg-promise')({

});

var cn = {
  host: 'localhost',
  port: 5432,
  database:'presidents',
  user: 'karolinrafalski',
  password: process.env.DB_PASSWORD
};



var db           = pgp(cn);

function showPresidents (req, res, next)  {
  db.any("select * from presidents")
  .then(function(data){
    res.rows= data;
    next();
  })
  .catch(function(error){
    console.log(error);
  });
}

function addPresident (req, res, next){
  //db.any ('INSERT INTO presidents ');
}


module.exports.showPresidents = showPresidents;
module.exports.addPresident = addPresident;
