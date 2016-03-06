(function() {
  'use strict';

}());


$(document).ready(()=>{



//everything to do with showing a list of movies and then showing an individual movie and showing edit and delete
//I now realize I should have made a series of functions and called them, rather than making this one crazy long thing
$('#show').on('click', (e) => {
   $.get('/movies')
     .done( (data) => {
       var $movies = $('#movies');
       $movies.empty();
       data.forEach( (el) => {
         var $div = $('<div>');
         var id = el.id;
         var $divWithClass = $div.addClass('showMovies').attr('id',id);
         var img = ( $('<img>').attr('src', el.img_url).attr('id',id) );
         var $movieDiv =  $divWithClass.text(el.title).append(img);
         $($movieDiv).on('click', (e)=>{
           e.preventDefault();
           var id = e.target.id;
           console.log ('e.target.id is ' + e.target.id);
           var oneMovieRoute = '/movies/'+id;
           $.get(oneMovieRoute)
           .done((data)=>{
             console.log('mah datah ' + data[0].title);
             var $movies = $('#movies');
             $movies.empty();
             data.forEach( (el) => {
               console.log(el);
               var $div = $('<div>');
               var id = el.id;
               var $divWithClass = $div.addClass('showMovies').attr('id',id);
               $divWithClass.append( $('<img>').attr('src', el.img_url) );
               var $movieDiv =  $divWithClass.text(el.title);

                  $.get('/movies/:id/edit')
                  .done((data)=>{
                    console.log ("this is id data " + data);
                    var $movies = $('#movies');
                    $movies.empty();
                    var $div = $('<div>');
                    var id = el.id;
                    console.log(el.id +'single movie');
                    var $divWithClass = $div.addClass('showMovies').attr('id',id);
                    var href = '/movies/'+el.id;
                    var img = ( $('<img>').attr('src', el.img_url) );
                    var $movieDiv =  $divWithClass.text(el.title).append(img);
                    var $input = $('<input>').attr('type','text').attr('name','showtimes').attr('placeholder', 'enter new showtimes').attr('id','showtimes');
                    var $buttonSubmit = $('<button>').attr('type','submit').attr('text','submit').text('Submit').addClass('submit');
                    var $buttonDelete = $('<button>').addClass('delete').attr('text', 'submit').text('Delete');
                    $movies.append($input);
                    $movies.append($buttonSubmit);
                    $movies.append($buttonDelete);
                    $movies.append($movieDiv);
                    $('.submit').click (function(event){
                      event.preventDefault();
                      var $showtimes = $('#showtimes');
                      var updateShowtimes = $showtimes.val();
                      //Thanks Dan Lawrence!!!!
                      $.post('/movies/' +id+'/edit',{showtimes:updateShowtimes})
                      .done((data)=>{

                      });
                    });
                    $('.delete').click(function(event){
                      event.preventDefault();
                      console.log ('press delete!');
                      $.post('/movies/' +id,{});
                    })
                 });
             });
               //$movies.append($movieDiv);
           });
         });
        $movies.append($movieDiv);
       });
     });
});



// $('h1').on('click', (e)=>{
//   var clickElement = e.target;
//   var captureClass = $(this).attr('class');
//   console.log(e.target.className);
//   alert(e.target.attr('class'));
// })

$('h1').click(function() {
    $.get('/movies/1')
   .done((data)=>{
     var $movies = $('#movies');
     $movies.empty();
     data.forEach( (el) => {
       console.log(el);
       var $div = $('<div>');
       var id = el.id;
       var $divWithClass = $div.addClass('showMovies').attr('id',id);
       var href = '/movies/'+el.id;
       var id = el.id;
       var a = $('<a>').attr('href',href);
       a.append( $('<img>').attr('src', el.img_url) );
       var $movieDiv =  $divWithClass.text(el.title).append(a);
        $movies.append($movieDiv);
     });
   });
});

$('#search').on('click', function(){
  console.log ("I'm searching for you!");
  $.get('/movies/search/:search')
  .done((data)=>{
    var $search = $('.search');
    var $searchValue = $search.val();
    console.log($searchValue);
  });
});




  //closes $(document).ready
});

function renderMovies (){



};
