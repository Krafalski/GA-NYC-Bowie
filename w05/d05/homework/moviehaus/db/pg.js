var pg          = require ('pg');


var connectionString ='postgres://karolinrafalski:' + process.env.DB_PASSWORD + '@localhost/movies';
 //check showCharacters in server.js
 function showMovies(req, res, next){
   pg.connect(connectionString, function (err, client, done){
     if(err){
       done();
       console.log(err);
       return res.status(500).json({success:false, data:err});
     }
     //check if movies is correct
     var query = client.query('SELECT * FROM movies', function (err, result){
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
 function addMovie(req,res, next){
   pg.connect(connectionString, function(err,client, done){
     if(err){
       done();
       console.log(err);
       return res.status(500).json({success:false, data:err});
     }
     //check movies for correct name!
     var query = client.query('INSERT INTO movies (title, year, img_url, times) VALUES ($1,$2, $3, $4)',[req.body.title, req.body.year, req.body.img_url, req.body.times],
     function (err, result){
       done();
       if (err){
       return console.error('error running query', err);
     }
     next();
   });
 });
 }

 module.exports.showMovies=showMovies;
 module.exports.addMovie=addMovie;
