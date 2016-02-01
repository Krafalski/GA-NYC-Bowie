$( document ).ready(function() {

var counter= 0;
  //clicking this button clears the board
            $("#startButton").click(function(){
              $(".box").html("");
              counter =0;
            })


function Cell(value) {

    this.value = value;
}

var cell1 = new Cell();

$("#boardContainer .box").click(function(){

  var counting = function() {

  if (counter % 2 === 0) {
    cell1.value = "x";

  } else if (counter %2 !== 0){
    cell1.value= "o";
  }

  console.log("This is: " + counter)
  };

    counting();
    $(this).html(cell1.value);

    counter++;

    console.log ("The value of box 1 is: " + $("#box1").html());
    console.log ("The value of box 2 is: " + $("#box2").html());
    console.log ("The value of box 3 is: " + $("#box3").html());


    if ($("#box1").html() === "x" && $("#box2").html() === "x" && $("#box3").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");
    }
    else if ($("#box4").html() === "x" && $("#box5").html() === "x" && $("#box6").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");

    }
    else if ($("#box7").html() === "x" && $("#box8").html() === "x" && $("#box9").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");

    }
    else if ($("#box1").html() === "x" && $("#box4").html() === "x" && $("#box7").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");

    }
    else if ($("#box2").html() === "x" && $("#box5").html() === "x" && $("#box8").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");

    }
    else if ($("#box3").html() === "x" && $("#box6").html() === "x" && $("#box9").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");

    }
    else if ($("#box1").html() === "x" && $("#box5").html() === "x" && $("#box9").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");

    }
    else if ($("#box3").html() === "x" && $("#box5").html() === "x" && $("#box7").html() === "x" ) {
      console.log("Player 1 wins");
      $('#boardContainer').prepend("<div> Player 1 Wins</div>");

    }

    //

    if ($("#box1").html() === "o" && $("#box3").html() === "o" && $("#box3").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }
    else if ($("#box4").html() === "o" && $("#box5").html() === "o" && $("#box6").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }
    else if ($("#box7").html() === "o" && $("#box8").html() === "o" && $("#box9").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }
    else if ($("#box1").html() === "o" && $("#box4").html() === "o" && $("#box7").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }
    else if ($("#box2").html() === "o" && $("#box5").html() === "o" && $("#box8").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }
    else if ($("#box3").html() === "o" && $("#box6").html() === "o" && $("#box9").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }
    else if ($("#box1").html() === "o" && $("#box5").html() === "o" && $("#box9").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }
    else if ($("#box3").html() === "o" && $("#box5").html() === "o" && $("#box7").html() === "o" ) {
      console.log("Player 2 wins");
      $('#boardContainer').prepend("<div> Player 2 Wins</div>");

    }

    else if ($("#box1").html().length >= 1 && $("#box2").html().length >= 1 && $("#box3").html().length >= 1 && $("#box4").html().length >= 1 && $("#box5").html().length >= 1 && $("#box6").html().length >= 1 && $("#box7").html().length >= 1 && $("#box8").html().length >= 1 && $("#box9").html().length >= 1){
      console.log("The Game is a Tie")
      $('#boardContainer').prepend("<div>The game is a tie!</div>")


    };


});



// $(".box").click(function(event) {
//
//       counter++;
//       console.log(counter);
//
// });

//
// function Board() {
//   this.cell2 = function() {
//     $('#box2').onclick(function(){
//       $('#box2').html("x");
//     })
//   }
//   this.cell2;
//   this.cell3;
//   this.cell4;
//   this.cell5;
//   this.cell6;
//   this.cell7;
//   this.cell8;
//   this.cell9;
//
//
// }
//
// var mainBoard = new Board();
// mainBoard.cell2;
//
//





  ///end of document.ready///
});
