// Shortcut version
// $(function() {

// })


$(document).ready(function() {
  var $homeBtn = $('#addHome');
  var newLink = $('<br /><br /><a id="zillow-link" href="http://www.zillow.com">Visit Zillow.com </a>')
  newLink.appendTo('body');
  var $zillowLink = $('#zillow-link');

  $homeBtn.removeClass('btn-danger').addClass('btn-success');
  $('h1').addClass('text-center');
  $zillowLink.attr("target", "_blank");
  // newLink.eq(2).attr("target", "_blank");
  console.log($zillowLink.attr("href"))

    $homeBtn.on('click', function(event){
      console.log(event)
      console.log(this)
    })

    // $homeBtn.click(function(evt){
    //     console.log(evt);
    //     console.log(this);
    // });









})
