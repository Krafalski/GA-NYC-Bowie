
$(document).ready(function(){
  var $resultsList = $('#doughnuts');
  $resultsList.empty();
 

  $('#new-doughnut').submit( function(event){
    
    //stop the form from submitting
    event.preventDefault();

    // target the html els
    var $flavor = $('#doughnut-flavor');
    var $style = $('#doughnut-style');
    

    // create a new donut obj from the html data
    var newDonut = {
      style:$style.val(),
      flavor:$flavor.val()
    }

    // post the new object to the server
    $.post('https://api.doughnuts.ga/doughnuts',newDonut)
      /*on success, populate the UL with my returned data*/
      .done( function(data){

        console.log('post req', newDonut, data)
        // render that donut
         $resultsList.append( $('<li>').text( renderDonut(data) ) );

      })
      .fail( function(){
        console.error('BOOP!')
      })
  })// on submit  
})

// custom template
// our render function for one donut
function renderDonut( donut ){
  console.log(donut)
  // use es6 string interpolation to make a super cool string  
  return `${donut.id} ${donut.style} ${donut.flavor}`;  
}
