# Functions!


### Warm up!

Do this part if you feel you need more practice with simple functions. 

You can write your code in a javascript file and test your functions in node. If you feel ambitious you can make a separate command line application which takes user input and calls a function. Play around with `readline-sync`.

#### calculator

define a `calculator` function that can do the four basic arithmetic operations (+, -, /, x). The calculator should take three arguments: the operation, and the two numbers in question. It should log and return the result.

#### colincheck

define a function `colincheck`, that takes a string as an argument, and checks it for the presence of the string 'colin'. If it includes colin, return COLIN PRESENT (and log it.)
  - how can we check a javascript string for a substring???

#### PALINDROME

Write a javascript application(in the command line or the browser) that takes a string as an argument and returns "That's a palindrome!" if the string is a palindrome. Use a ``while loop``. (a palindrome is a word that is the same forewards and backwards, like 'racecar')

### Methods!

Now we will rewrite our MTA application from last night in a different way. Create a function which returns an object. The function takes one argument which we call `data`, which is an object containing our mta structure. The object the function returns should have the following properties

* `data`
   * an object with all line information
* `lines()`
   * this is a function which returns an array with all the lines
* `stops(line)`
   * function which takes one argument, and returns an array with all the stops of the selected line
* `distanceSingleLine(line, stop1, stop2)`
   * function which returns the distance between `stop1` and `stop2` located on line `line`
* `distance(line1, stop1, line2, stop2)`
   * function which returns the distance between stops on different lines.
