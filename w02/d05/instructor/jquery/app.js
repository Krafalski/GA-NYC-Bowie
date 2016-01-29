// Shortcut version
// $(function() {

// })


$(document).ready(function() {

  $('#addHome').removeClass('btn-danger').addClass('btn-success');
  $('h1').addClass('text-center');
  var newLink = $('<br /><br /><a id="zillow-link" href="http://www.zillow.com">Visit Zillow.com </a>')
  newLink.appendTo('body');
  $('#zillow-link').attr("target", "_blank");
  // newLink.eq(2).attr("target", "_blank");

})
