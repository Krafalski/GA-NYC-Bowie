# Prompting the User

## Research
This morning we will discover a better way to get input from the user from a command line application. Take a few minutes to find out what [npm](https://www.npmjs.com/). Can you install it on your system?

Find the docs for the npm package called `readline-sync` and look at some of their examples. How might we use this to make our command line applications better.

## Calculator

Write a user friendly command line calculator. When you run the application `node calculator.js`, have it greet the user with a friendly message and provide numbered options to the user. For Example

```bash
node calculator.js
Hey there future coder! Let's do some math. Choose any of the options below
1. Addition
2. Subtraction
3. Multiplication
4. Division
What would you like to do: 
```

When the user inputs a valid number they should be prompted to input two numbers after which an answer is given.

BONUS:
1. When the answer is computed, make the calculator prompt for another operation without having to restart the application.
2. Have a secret input (such as `q`) which will exit out of the application.
3. Look up the npm package called `cli-colors`. Can you make you calculator pretty!
