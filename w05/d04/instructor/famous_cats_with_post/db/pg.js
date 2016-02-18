var pg = require('pg');
var connectionString = "postgres://generalassembly:generalassembly@localhost/famous_cats";


function showAllCats(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    var query = client.query("SELECT * FROM most_famous_cats;", function(err, result) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.rows = result.rows
      next()
    });
  });
}

function addCat(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    var query = client.query("INSERT INTO most_famous_cats (name, description, img_url) VALUES($1, $2, $3 )",
    [req.body.name, req.body.description, req.body.img_url],
    function(err, result) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      next()
    });
  });
}
module.exports.showAllCats = showAllCats;
module.exports.addCat = addCat;
