


function Letter(value){

// Value is a stand-in for the letter
    this.value = value

//initial state of Letter
    this.hidden = true;

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

// Create an instance of Letter
var letterA = new Letter("a");
letterA.render(this.value);
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
//This is an Instance of Word
var word = new Word(letterA);
word.getLetters(letterA.value);
