//console.log('yo yo yo');

$(document).ready(function (){

var html = 'https://api.doughnuts.ga/1';

// var agent = $.get('https://api.doughnuts.ga/')
// .done(function(data){
//   console.log(data);
// });


//use the generic $.ajax to do the same thing as above (hint datatype:'json')
// var request = new XMLHttpRequest();
// request.onload = function(data){
//   console.log(data);
// };


$.ajax('https://api.doughnuts.ga/doughnuts/1', {
  datatype:'json',
   method:'GET'
 })
.done(function(data){
  console.log(data);
});

// modify that donut by changing its flavor how do we RESTfully update an object

$.ajax('https://api.doughnuts.ga/doughnuts/1',{
  method:'PUT',
  dataType:'json',
  data:{style:'delish', flavor:'garlic'}
}).done(function(data){
  console.log('put req', data);
});

//
var freedom = {
  style:'filed',
  flavor:'metalic'
};

$.post('https://api.doughnuts.ga/doughnuts', freedom)
.done(function(data){
  console.log('post req', data);
});

//update the form

//onclick(prevent submit)
//readfor fields
// key value pairs donut = dataType
$( 'form' ).submit(function( event ){
  event.preventDefault();
  console.log (' u did it!');
  var $flavor = $('#doughnut-flavor').val();
  var $style = $ ('#doughnut-style').val();
  console.log($flavor, $style);
  var $results = $('#doughnuts');
  console.log($results);
  var newDonut ={
    style:$style,
    flavor:$flavor
  }
  $.post('https://api.doughnuts.ga/doughnuts', newDonut)
  .done(function(data){
    console.log('post req', data);
    renderDonut($results, data);
  })
  .fail(function (){
    console.log('ahh another error!')
  });
});


function renderDonut($place, donut) {
  //use es6 string interpolation
  var innerText = `${donut.id} ${donut.style} ${donut.flavor}`;
  var $li = $('<li>').text(innerText);

 $place.append($li);
 return;
}

// $('select submit').on('click',function
// (){
//
// })

//post({data})
//create an li
//append to doughnuts
//id, name type - add that to the li
/// class solution:




//closes document ready function
});
