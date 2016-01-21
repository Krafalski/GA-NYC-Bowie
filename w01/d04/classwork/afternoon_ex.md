# Data Structures!

A big part of your job as programmers is going to be figuring out how to organize your data. For now lets focus on the javascript data structures we covered today. We are going to try and describe a simplified version of the MTA. For this exercise work in the node console.

## Beginnings of the MTA
Imagine you are a developer back in 1904 working with the city administration to model the first subway line built. Let's pretend it was called the "N" line. The N has 6 stops which are *Times Square, 34th, 28th, 23rd, Union Square, and 8th*. Try figure out which data structure we talked about today which can accommodate the name of the line and its stops and allows for an easy way to access the different stops and list them in the console. Once you do this try to achieve the following:
1. Log the first stop
2. Log the 5th stop
3. Log the last stop
4. List all stops on separate lines

## The MTA Grows
Fast forward a few years. The MTA has tripled in size and now has three separate lines.

- The **N** line has the following stops: *Times Square, 34th, 28th, 23rd, Union Square, and 8th*
- The **L** line has the following stops: *8th, 6th, Union Square, 3rd, and 1st*
- The **6** line has the following stops: *Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place*.

As the main developer on the project you need to modify your data structure to accommodate all the new information. Design a data structure which you will store in a variable called `mta`, which will allow for an natural way to access everything. Here are a few things you should be able to do with the least amount of typing

- Access all the stops for the **L** line. (note that you should be able to access the **L** line through its name, and not its index)
- Access the 3rd stop of the **6** line
- Access the last stop of the **N** line

Bonus:

Iterate through your data structure and log to the console

    The N line has  6 stops. They are: Times Square, 34th, 28th, 23rd, Union Square, and 8th
    The L line has 5 stops. They are: 8th, 6th, Union Square, 3rd, and 1st
    The 6 line has 6 stops. They are: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place

Make sure your code does not have any **hard coded** information. All your specific line and stop names and their number come from your `mta` variable.


## Deeper into Arrays
You will need to look up the [array object documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to lookup some of the following functions needed. Finish as much as you can in the 45 allotted minutes and then we'll go over when we are done.

1. Spend the next 10 minutes going over the documentation.
<br><br>
1. Given the following array
```javascript
var instructors = ['Jason','Colin','Peter','Rachel'];
```
  - Find a method to remove `'Colin'` from the array (he's an imposter), and then using another array method to add `'KP'`.
  - If I wanted the last element of `instructors` without knowing the value of index that it sits in, how would I get it?
<br><br>
1. Look up the functions `indexOf()` and `includes()`in the documentation. Both of these functions can be used to see whether or not an array contains an element. What range of values do both of them return and how are they different?
<br><br>
1. Run the following command:
```javascript
Array(16).join('Na') + " Batman!"
```
  - What does it return?
  - What does `Array(n)`, where `n` is an arbitrary number return?
  - What does `join()` do?
<br><br>
1. What do `shift()` and `unshift()` do?
  - How do you use them?
<br><br>
1. Run the following code:
```javascript
var str = "...won tnereffid skool siht ,haoW"
// 1.
str = str.split('');
// 2.
str = str.reverse();
// 3.
str = str.join('');
// 4.
console.log(str);
```
  - What do `split()`, `reverse()`,and `join()` return?
  - What data type is the state of `str` at: `1.`, `2.`, `3.`, and `4.`?
<br><br>


## Fizz Buzz

Fizz buzz is a game about division. Create a program that will iterate through numbers from 1 to 101 and log each number in the console.

- In the loop everytime a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
- If the number is divisible by  **5**, the word "buzz" should be logged.
- If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

Hint: Go read about the [Remainder Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) on MDN and figure out how to use it to simplify this problem.

## Calculator
Write a command line application `calculator.js` which takes 3 command line arguments. The first argument is a string which describes a mathematical operation. The second and third arguments are integers. Log to the console the result.

Example

    ```sh
    node calculator.js add 2 3  => 5
    node calculator.js subtract 2 3 => -1
    node calculator.js multiply 4 5 => 20
    ```



