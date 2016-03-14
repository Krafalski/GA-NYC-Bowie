const pgp = require('pg-promise')({});
const cn = "postgres://generalassembly:generalassembly@localhost/tokens_test";
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const db = pgp(cn)

  function createSecure(email, password, callback) {
    bcrypt.genSalt(function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash){
        callback(email, hash)
      })
    })
  }


function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser)

      function saveUser(email, hash) {
        db.none("INSERT INTO users (email, password_digest) VALUES ($1, $2);",
            [email, hash])
            .then(() => {
              next()
            })
            .catch(() => {
              console.log('error signing up')
            })
      }
    }

function loginUser(req, res, next) {
  var email = req.body.email
  var password = req.body.password

  db.one('SELECT * FROM users WHERE email LIKE ($1);', [email])
    .then((data) => {
      console.log(data)
        if (bcrypt.compareSync(password, data.password_digest)) {
          res.rows = data
          next()
        } 
        res.status(401).json({data: "password and email do not match"})
      })
      .catch(() => {
        console.error('error finding user')
      })
    }

module.exports.loginUser = loginUser;
module.exports.createUser = createUser;
