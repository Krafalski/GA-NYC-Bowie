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
         var $div = $('<div>');
         $movies.append( $('<div>').text(el.title) );
         $movies.append( $('<img>').attr('src', el.img_url) );
       });
     });

});








  //closes $(document).ready
});
