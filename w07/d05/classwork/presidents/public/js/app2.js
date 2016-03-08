(function() {
  'use strict';

}());
//alert('Donald Trump Apocalypse!');

$(document).ready(()=>{
  console.log('eff yeah the donald!');

$( '#add' ).on('click', (event)=>{
  console.log('wowie');
});
});


$('#show').on('click', (e) => {
   $.get('/presidents')
     .done( (data) => {
       var $presidents = $('.presidents');
       $presidents.empty();
       data.forEach( (el) => {
         var $div = $('<div>');
         $presidents.append( $('<div>').text(el.name) );
         $presidents.append( $('<img>').attr('src', el.img_url) );
       });
     });

//
// $('#presidentForm').on('submit', function(event){
//   event.preventDefault();
//   console.log ('sth erewareqafeaevrz32r2f3');
//   $.post('/presidents', $('#presidentForm').serialze())
//   .done(function(data){
//     console.log(data);
//   })
// })








  //closes $(document).ready
});
