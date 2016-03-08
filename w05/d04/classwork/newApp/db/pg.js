var pg = require('pg');
var conString = 'postgres://karolinrafalski:' + process.env.DB_PASSWORD + '@localhost/carmen';



function showKabul(req, res, next){
  console.log('eieieeiee');
  pg.connect(conString, function(err,client,done) {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query('SELECT * FROM city WHERE id=1', function(err, result) {
      done();//closes pg.connect //if you don't close connects there is a limit of ~20 so there will be an error
      if(err) {
        return console.error('error running query', err);
      }

      res.rows = result.rows[0]
      next()
    //  res.render('kabul.html.ejs', result.row[0]) //don't need this yet
      //res.send(result.rows[0]);
    });
  });
}

function showAllCities(req, res, next){
  pg.connect(conString, function(err,client,done) {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success:false, data:err});
    }
    var query = client.query('SELECT * FROM city', function(err, result) {
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


module.exports.showKabul = showKabul;
//the above is to export what is from this file
module.exports.showAllCities = showAllCities;
