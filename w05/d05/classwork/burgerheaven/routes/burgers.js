
var express = require('express');
var burgers = express.Router();
var burgerData =[];

var dumpMethod = (req,res)=> res.send(req.method + "burgers! //Method not implemented");

module.exports = burgers;
//at the root of /burgers now, no longer /burgers
//burgers.get('/',(req, res)=>)


burgers.route('/')
// burger homepage
 .get((req, res)=> res.send('<h1>You got the burgers.</h1>'))
//change to => res.render('pages/burgers_all'),{}) in the empty object is the thing that should be shown via ejs

 //create a new burger
 .post((req, res)=>{
   burgerData.push(req.body)
 var newID = burgerData.length-1;
 res.redirect('./'+newID)

 });


//not done correctly
 //burgerData.push(req.body)

//edit one burger
burgers.route('/')
.put((req,res)=>{
  if(!(req.params.burgerID in burgerData)){
    res.sendStatus(404);
  }
  burgerData[req.params.burgerID]
})


//show create burger form
burgers.get('/new', (req, res)=>
  res.render('pages/burger_edit')
)

//show edit form for 1 burger
// burgers.get('/:burgerID/edit', (req, res)=>
//   //res.render('pages/burger_edit'{})
// )

//single burgers
burgers.route('/:burgerID')
.get((req, res)=>{
  //if there is not a burger at postion :burgerID, throw a non-specific error
  res.render('pages/burger_one')
  //needs to show one burger, needs to have an edit button
})
//update
.put((req,res)=> {
  //replace the burger at this position :burgerID position
  //redirect to the new burger_one
  res.redirect('./'+ req.params.burger.ID)
})
.delete(dumpMethod);
