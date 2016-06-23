const express     = require ('express');
const users       = express.Router();
const db          = require('../db/pg');
var bcrypt        = require('bcrypt');
var salt          = bcrypt.genSaltSync(10);
var session       = require('express-session')


users.get('/new', (req, res)=>{
  res.send ('users html thing here???')
})



function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);
//need to update this to pg promise
  function saveUser(email, hash) {
    // Get a Postgres client from the connection pool
    db.none ("INSERT INTO users (email, password_digest) VALUES ($1, $2);", [email, hash]).then((data)=>{
      next();
    })
    .catch(()=>{
      console.log(error)
    })
  }
}



//
// function createSecure(email, password, callback) {
//   // hash password user enters at sign up
//   bcrypt.genSalt(function (err, salt) {
//     bcrypt.hash(password, salt, function (err, hash) {
//       // this callback saves the user to our database with the hashed password
//       callback(email, hash)
//     });
//   });
// };
//
// function loginUser(req, res, next) {
//   var email = req.body.email;
//   var password = req.body.password;
//
//   // find user by email entered at log in
//
//   //change to pg promise
//   pg.connect(connectionString, function(err, client, done) {
//     // Handle connection errors
//     if(err) {
//       done();
//       console.log(err);
//       res.status(500).json({ success: false, data: err});
//     }
//
//     var query = client.query("SELECT * FROM users WHERE email LIKE ($1);",
//       [email], function(err, result) {
//         done()
//         if(err) {
//           return console.error('error, running query', err);
//         }
//
//         if (result.rows.length == 0) {
//           res.status(204).json({success: false, data: 'no account matches that password'})
//         } else if (bcrypt.compareSync(password, result.rows[0].password_digest)) {
//           res.rows = result.rows[0]
//           next()
//         }
//     });
//   });
// }
// users.post('/login', db.loginUser, (req, res) => {
//     req.session.user = res.rows
//
//     // when you redirect you must force a save due to asynchronisity
//     // https://github.com/expressjs/session/issues/167 **
//     // "modern web browsers ignore the body of the response and so start loading
//     // the destination page well before we finished sending the response to the client."
//
//     req.session.save(function() {
//       res.redirect('/')
//     })
// })

module.exports = users;
