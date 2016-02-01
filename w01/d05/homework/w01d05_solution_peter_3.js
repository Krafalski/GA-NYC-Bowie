
function Letter(value){

// Value is a stand-in for the letter
    this.value = value

//initial state of Letter
    this.hidden = false;

//Begin methods:
    this.hide = function() {
      this.hidden = true;
    }

    this.show = function() {
      this.hidden = false;
    }

    this.render = function () {
      if (this.hidden === true) {
        return "_"
      } else if (this.hidden === false) {
        return this.value;
      }
    }

}

// Create an Instances of Letter
var letterA = new Letter("a");
letterA.render(this.value);

var letterP = new Letter ("p");
letterP.render(this.value);

var letterI = new Letter ("i");
letterI.render(this.value);


letterA.hide();
letterP.hide();
letterI.hide();

//
// function Word(word){
//
//   this.letters = word.split("")
// }
//
// var wordInstance1 = new Word("adam");
// console.log(wordInstance1);
//

//Create a Word Constructor Function

function Word(anInstanceOfLetter) {

    this.letters = [],

    this.getLetters = function(newWord) {

//This is the first thing logged "console.log(newWordSplit)"
      var newWordSplit = newWord.split('');
      console.log(newWordSplit);

      //push each letter of newWordSplit into lettersarray

      for (var i= 0; i < newWordSplit.length; i++) {

          this.letters.push(newWordSplit[i]);
      }
    //logging the result this.getLetters as a test //
        console.log("This is the result of get letters: " + this.letters)
    ///////////////////////////////////////////////


    }


}
//Create Instances of Word
var gottenLetterA = new Word(letterA);
gottenLetterA.getLetters(letterA.value);

var gottenLetterP = new Word(letterP);
gottenLetterP.getLetters(letterP.value);

var gottenLetterI =  new Word(letterI);
gottenLetterI.getLetters(letterI.value);


var assembledWord = function() {
var wordToGuess = gottenLetterA.letters + gottenLetterP.letters + gottenLetterI.letters
console.log("The word to guess is: " + wordToGuess);
}

assembledWord();
