//what to write....
// need to get select to work with this in javascript
// input:checked + p

//need to add listeners to each check thing? check box?
// need to listen for the shift key
//need a shift click action
// need to mark the click one with something special 'list end'
//then need to iterate through each one
// add the check class to each one until list end
//add the class to the next and the next
//
var p = $('p');
function shiftClickAction (e){
  if (e.shiftKey){
    alert ('you pressed shift and click!')

    $(this).addClass('checkme');
  }
  console.log('clicked!');

}
var item = $( '.item' );
item.on('click', shiftClickAction);
