//alert ('you did it! JS connected! So rad!');

$(document).ready(function(){

$('#random').on('click', function (event){
  event.preventDefault();
  var $ul = $('#showGifs');
  $.get('/random').done(function(data){
    console.log(data['data']['image_original_url']);
    showGifs($ul, data['data']['image_original_url']);
  });

});

$('#kittens').on('click', function (event){
    event.preventDefault();
  var $ul = $('#showGifs');
  $.get('/kittens').done(function(data){
    console.log(data);
    //console.log(data['data']['image_original_url']);
    showGifs($ul, data['data']['image_original_url']);
  });
});

$('#puppies').on('click', function (event){
  event.preventDefault();
  console.log ('clickety click click!');

});

$('#pokemon').on('click', function (event){
  event.preventDefault();
  console.log ('clickety click click!');

})

$('#searchbyid').on('click', function (event){
  event.preventDefault();
  console.log ('clickety click click!');

})


function showGifs($place, string){
 var image = string;
  var $li = $('<img>').attr('src',image);
  $place.append($li);
  return;
}

//closes document ready
});
