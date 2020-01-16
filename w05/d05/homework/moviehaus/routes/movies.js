//'use strict';
var express         = require('express');
var movies          = express.Router();


// var movieData =[
//   { 'title':'Harold & Maude',
//     'img': 'http://ecx.images-amazon.com/images/I/51TXBBTT8RL.jpg',
//     'showTimes': '11:30am, 2:30pm',
//     'id':0
//   },
//
//   { 'title':'Eternal Sunshine of the Spotless Mind ',
//      'img': 'http://schmoesknow.com/wp-content/uploads/2014/08/poster-eternal-sunshine-of-the-spotless-mind.jpg',
//      'showTimes': '1:00am, 7:30pm',
//      'id':2},
//
//   { 'title':'Being John Malkovich',
//     'img': 'https://s3.amazonaws.com/assets.writersstore.com/system/0000/0382/being-john-malkovich-charlie-kaufman_medium.jpg',
//     'showTimes': '10:30am, 12:30pm',
//      'id':3},
//
//   { 'title':'Eraserhead',
//     'img': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Eraserhead.jpg',
//     'showTimes': '3:45pm, 6:10pm',
//     'id':4}
//
// ];


//for testing set ups
var dumpMethod = (req, res)=>res.send(req.method+ " mooovies! //METHOD NOT IMPLEMENTED");

// this means /movies/ because of other set up stuff
//moved to myserver.js for the moment line 77
// movies.route('/movies')
// //movies homepage
//   .get((req, res)=>{
//     //swap data:movieData for real data
//   res.render('pages/movie_',{data:movieData});
//   })
//   .post((req,res)=> {
//     movieData.push(req.body);
//
//   var newID = movieData.length-1;
//   res.redirect('./'+ newID);
// });

//show movie search and add form  -> /movies/search
movies.get('/search', (req, res)=>
  res.render('pages/movie_edit', {
    movieForm:{
      whatIs: 'Add a movie!',
      movieURL: '/movies/',
      submitMethod:'post'
    }
  })
);

//single movies NEED THIS PLUS myserver line ~62 app.get('/movies/:mID',db.showMovies, function (req,res){
movies.route('/:mID')
  .get((req,res)=>{
     var mID = req.params;
       //res.send('this is mID ' + mID.mID);

    //if there is not a movie throw an error?
    // if(!(mID in movieData)){
    //   res.sendStatus(404);
    //   return;
    // }
  //  res.send('this is mID ' + mID + ' this is movies ' + movies);
     //res.render('pages/tester.ejs', {movies:res.rows});
  })


// one movie update
.put((req, res)=>{
  var mID = req.params.movieID;
  //if does not exist...
  if(!(mID in movieData)){
    res.sendStatus(404);
    return;
  }
  //replace the movie at :movieID position
  movieData[mID] = req.body;
})
.delete(dumpMethod);

module.exports = movies;
