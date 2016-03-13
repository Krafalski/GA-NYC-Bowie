const express           =  require ('express');
const movies            =  express.Router();

const db                = require ('../db/pg');



movies.get ('/', db.showMovies,(req, res)=>{
  res.send (res.rows)
});

movies.get ('/search/:search', (req , res )=>{
  request({url: 'http://www.omdbapi.com', qs:{s: req.params.search}, json:true},
function(error, response, body){
  console.log(body);
  res.send(body);
});
});

movies.post(':id/edit', db.editMovie, (req, res)=>{
  res.send (res.rows);
  res.redirect('/') //need this with react?
})

movies.get('/:id', db.showMovie, (req,res)=>{
  res.send (res.rows);
});

movies.post('/:id', db.deleteMovie, (req, res)=>{
  console.log('hitting the delete route in route.js');
  res.redirect('/') //need this for react??
})

module.exports = movies;
