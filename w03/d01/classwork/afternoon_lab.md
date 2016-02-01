# Hangman in the Browser!

You will now build the hangman game in the browser. Here are the objects we built previously for the hangman game

```javascript
// Letter Constructor 
function Letter(value) {
  this.value = value;
  this.hidden = true;

  this.hide = function() {
    this.hidden = true;
  };

  this.show = function() {
      this.hidden = false;
  };

  this.render = function() {
    if (this.hidden){
      return '_';
    } else {
      return this.value;
    };    
  };
};


// Word constructor
function Word(){
    this.letters = [];

    this.getLetters = function(newWord) {
        var letters = newWord.split('');
        for (var i = 0, length = letters.length; i < length; i++) {
            var letterObject = new Letter(letters[i]);
            this.letters.push(letterObject);
        }
    };

    this.isFound = function() {
        for (var i = 0, length = this.letters.length; i < length; i++) {
            if (this.letters[i].hidden) {
                return false;
            }
        }
        return true;
    };

    this.try = function(letter) {
        var found = false;
        for (var i = 0, length = this.letters.length; i < length; i++) {
            if (this.letters[i].value === letter) {
                this.letters[i].show();
                found = true;
            }
        }
        return found;
    };

    this.render = function() {
        var rendered = '';
        for (var i = 0, length = this.letters.length; i < length; i++) {
            rendered += this.letters[i].render();
        }
        return rendered;
    };
};

// game object literal
var game = {
    guesses: 0,
    guessedLetters: [],
    words: [],
    currentWord: '',
    
    startGame: function(wordsArray) {
        this.guesses = 10;
        this.guessedLetters = [];
        this.words = [];
        this.words = wordsArray;
        var randomInteger = Math.floor(Math.random() * (this.words.length));
        this.currentWord = new Word();
        this.currentWord.getLetters(this.words[randomInteger]);
    },

    guess: function(letter) {
        if (this.guessedLetters.indexOf(letter) === -1) {
            this.currentWord.try(letter);
            this.guessedLetters.push(letter);
            this.guesses--;
        }
    },

    isOver: function() {
        return this.currentWord.isFound() || (this.guesses === 0);
    },

    overMessage: function() {
        if (this.currentWord.isFound()) {
            return 'You win';
        }
        if (this.guesses === 0) {
            return 'You lose';
        }
        return '';
    },

    render: function() {
        return this.currentWord.render();
    }
};
```

Make sure you go over the code and understand how it works. If you feel like you need more practice with constructors try to rewrite these constructors from scratch.

## Putting the game in the browser

Write the HTML + CSS which will support the functionality of the game. Keep it simple. You can always style it after the game is working.

Link a javascript file and start with the above starter code. Implement event listeners and allow the user to play a hangman game.



