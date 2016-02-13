

middleware: software that acts as a bridge between an operating system or database and applications, especially on a network.




The following is not needed for getting files off the internet will use request to get the 'live' data. Use this for files that are stored locally
// var fs =require('fs');
// var ratsDBText = fs.readFileSync('ratSampleData.json', 'utf8');
// var ratsDB = JSON.parse(ratsDBText);
// var restuarantDBText = fs.readFileSync('restaurantSampleData.json', 'utf8');
//var restaurantDB = JSON.parse(ratsDBText);


How to use request module:
// // sample from npm site:
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // Show the HTML for the Google homepage.
//   }
// });


Alternate set up of server via Jason's in-class solution:
app.listen(3000, function () {
  console.log('servers running captain!')
});


Did not need this to render the data...all the data as one json file:

//route violations (of restuarants)
// app.get('/violations', function (req, res){
//    var hello = "Hey! Check out all these violations! ????";
//   res.render('violation_results.html.ejs', {
//     hello:hello,
//     violationsRemoteData:violationsRemoteData
//
//
//   });
//   console.log ('in where we need to be and ' + violationsRemoteData);
// });
//route violations (of restuarants)//


don't seem to need this either in server.js

// //default page test
// app.get('/', function (req, res){
//   var welcome = "Welome, this page is rat free, for now.";
//   res.render('welcome.html.ejs', {
//     welcome:welcome
//   });
// });
//default page test//


//route rats
// app.get('/rats', function (req, res){
//   var hello = "Say hello to all the rats";
//   res.render('rat_sighting_results.html.ejs', {
//     hello:hello
//   });
// });
//route rats //
