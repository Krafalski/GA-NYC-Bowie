$( document ).ready(function() {


    console.log("ready!");


    // [                [ ],[ ],[ ],
    //                  [ ],[ ],[ ],
    //                  [ ],[ ],[ ]       ]

    //clicking this button clears the board
              $("#startButton").click(function(){
                $(".box").html("");
              })

var board = [ ];



//create a constructor function for cell value
      function Cell (value) {
//clicking causes an xo to show up:
      this.setState = $(".box").click(function(){
      $(".box").append("")
  })

  this.playable = true;

}

  //create an instance of Cell

  var cell1 = new Cell();



var counter = 2;
$(".box").click(function(){

console.log(counter);

});

var run = function() {
if (counter % 2 !== 0) {

  $(".box").click(function(){
  $(".box").append("x")
    counter++;
    })


}

  else if (counter % 2 === 0) {

    $(".box").click(function(){
    $(".box").append("z")
      counter++;
    })


  }
};
run();

  ///end of document.ready//////
});
