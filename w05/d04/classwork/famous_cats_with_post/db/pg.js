var pg = require('pg');
var connectionString = "postgres://karolinrafalski:Czm2125hon@localhost/famous_cats";


function showCats (req, res, next){
  pg.connect(connectionString, function(err,client,done) {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query('SELECT * FROM most_famous_cats', function(err, result) {
      done();//closes pg.connect //if you don't close connects there is a limit of ~20 so there will be an error
      if(err) {
        return console.error('error running query', err);
      }

      res.rows = result.rows;
      next()
    //  res.render('kabul.html.ejs', result.row[0]) //don't need this yet
      //res.send(result.rows[0]);
    });
  });
}

function addCats(req, res, next){
  pg.connect(connectionString, function(err,client,done) {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query('INSERT INTO most_famous_cats (name, description, img_url) VALUES ($1,$2,$3 )',
                              [req.body.name, req.body.description, req.body.img_url],
    function(err, result) {
      done();//closes pg.connect //if you don't close connects there is a limit of ~20 so there will be an error
      if(err) {
        return console.error('error running query', err);
      }
      next();
    //  res.render('kabul.html.ejs', result.row[0]) //don't need this yet
      //res.send(result.rows[0]);
    });
  });

}

module.exports.showCats=showCats;
module.exports.addCats=addCats;
