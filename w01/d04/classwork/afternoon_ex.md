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




