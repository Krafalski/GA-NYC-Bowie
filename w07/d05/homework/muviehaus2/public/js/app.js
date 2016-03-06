(function() {
  'use strict';

}());


$(document).ready(()=>{




$('#show').on('click', (e) => {
   $.get('/movies')
     .done( (data) => {
       var $movies = $('#movies');
       $movies.empty();
       data.forEach( (el) => {
         var $div = $('<div>')
         var id = el.id;
         var $divWithClass = $div.addClass('showMovies').attr('id',id);
         var href = '/movies/'+el.id;
         var id = el.id;
         var a = $('<a>').attr('href',href)
         a.append( $('<img>').attr('src', el.img_url) )
         var $movieDiv =  $divWithClass.text(el.title).append(a);
         $($movieDiv).on('click', (e)=>{
           e.preventDefault();
           var id = e.target.id
           console.log('need the id! Let us do it ' + id)
          //  console.log ('back here again, eh?')
          var oneMovieRoute = '/movies/'+id;
           $.get(oneMovieRoute)
           .done((data)=>{
             console.log('mah datah ' + data[0].title);
             var $movies = $('#movies');
             $movies.empty();
             data.forEach( (el) => {
               console.log(el);
               var $div = $('<div>')
               var id = el.id;
               var $divWithClass = $div.addClass('showMovies').attr('id',id);
               var href = '/movies/'+el.id;
               var id = el.id;
               var a = $('<a>').attr('href',href)
               a.append( $('<img>').attr('src', el.img_url) )
               var $movieDiv =  $divWithClass.text(el.title).append(a);
                $movies.append($movieDiv);
             });
           })
         })
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
       var $div = $('<div>')
       var id = el.id;
       var $divWithClass = $div.addClass('showMovies').attr('id',id);
       var href = '/movies/'+el.id;
       var id = el.id;
       var a = $('<a>').attr('href',href)
       a.append( $('<img>').attr('src', el.img_url) )
       var $movieDiv =  $divWithClass.text(el.title).append(a);
        $movies.append($movieDiv);
     });
});
});





  //closes $(document).ready
});
