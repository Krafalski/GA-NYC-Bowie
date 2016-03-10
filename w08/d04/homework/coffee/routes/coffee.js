const express     = require('express');
const coffee      = express.Router();

const db          = require('../db/pg');


coffee.route('/')
 .get(db.showCoffee, (req, res)=>{
   res.send(res.rows)
 })
 .post( (req,res)=>{
   //add a coffee to the list
 })


module.exports = coffee;
