const express     = require('express');
const coffee      = express.Router();

const db          = require('../db/pg');


coffee.route('/')
 .get(db.showCoffee, (req, res)=>{
   res.send(res.rows)
 })
 .post(db.addCoffee, (req,res)=>{
   res.json(res.rows);
 })


coffee.route('/')
// .get(db.addCoffee, (req, res)=>{
//   res.send(res.rows)
// })




coffee.route('/')
 .get(db.showCoffee, (req, res)=>{
   res.send(res.rows)
 })



module.exports = coffee;
