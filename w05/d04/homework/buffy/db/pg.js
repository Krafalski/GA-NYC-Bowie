var pg = require('pg');
//update env and concatenate string,
//store password elsewhere
//git ignore env
//create buffy database
//make sure database is linked
var connectionString ='postgres://karolinrafalski:' + process.env.DB_PASSWORD + '@localhost/buffy';

//check showCharacters in server.js
function showCharacters(req, res, next){
  pg.connect(connectionString, function (err, client, done){
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    //check if buffy is correct
    var query = client.query('SELECT * FROM characters', function (err, result){
      done();
      if (err){
        return console.error('error running query', err);
      }

      res.rows = result.rows;
      next();
    });
  });
}
//make sure to add this function to server.js
function addCharacters(req,res, next){
  pg.connect(connectionString, function(err,client, done){
    if(err){
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    //check buffy for correct name!
    var query = client.query('INSERT INTO characters (name, dead, team, img_url) VALUES ($1,$2, $3, $4)',[req.body.name, req.body.dead, req.body.team, req.body.img_url],
    function (err, result){
      done();
      if (err){
      return console.error('error running query', err);
    }
    next();
  });
});
}

module.exports.showCharacters=showCharacters;
module.exports.addCharacters=addCharacters;
