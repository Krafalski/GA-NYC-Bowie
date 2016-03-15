const pgp         = require('pg-promise')({});
var cn            = {
  host            : 'localhost',
  port            : 5432,
  database        : 'session',
  user            : 'karolinrafalski',
  password        : 'Czm2125hon'
};

const bcrypt      = require ('bcrypt');
const salt        = bcrypt.genSaltSync(10);
const db          = pgp(cn);

function createSecure(email, password, callback) {
bcrypt.genSalt(function(err, salt) {
  bcrypt.hash(password, salt, function(err, hash){
    callback(email, hash);
  });
});
}


function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);

      function saveUser(email, hash) {
        db.none("INSERT INTO users (email, password_digest) VALUES ($1, $2);",
            [email, hash])
            .then(() => {
              next();
            })
            .catch(() => {
              console.log('error signing up');
            });
      }
    }
//full of typos :(
function loginUser (req, res, next ){
  var email = req.body.email;
  var password = req.body.password;
  db.one('SELECT * FROM users WHERE email LIKE ($1);', [email])
  .then((data)=> {
    console.log(data);
      if(bcrypt.compareSync(password, data.password_digest)){
        res.rows = data;
        next();
      } else {
        res.rows = "password and email do not match";
          next();
    }})
    .catch(()=>{
      console.error('error finding user')
    })
  }

  module.exports.createUser = createUser;
  module.exports.loginUser = loginUser;
