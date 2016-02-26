var pg = require('pg');
var connectionString = 'postgres://generalassembly:' + process.env.DB_PASSWORD + '@localhost/carmen';


function showKabul(req, res, next) {
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      done()
      console.log(err)
      return res.status(500).json({success: false, data: err})
    }
    var query = client.query('SELECT * FROM city WHERE id = 1', function(err, result) {
      done()
      if (err) {
        return console.error('error running query', err);
      }
      res.rows = result.rows[0]
      next()
      // res.render('kabul.html.ejs', result.rows[0]);
    });
  });
}

function showAllCities(req, res, next) {
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      done()
      console.log(err)
      return res.status(500).json({success: false, data: err})
    }
    var query = client.query('SELECT * FROM city;', function(err, result) {
      done()
      if (err) {
        return console.error('error running query', err);
      }
      res.rows = result.rows
      next()
      // res.render('kabul.html.ejs', result.rows[0]);
    });
  });
}


module.exports.showKabul = showKabul;
module.exports.showAllCities = showAllCities;
