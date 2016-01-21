# Javascript with Node

This morning you are going to practice writing small javascript applications, which you are going to run with Node.JS. 

Go ahead and create a new directory in today's classwork folder called `node-apps` and go into it. For every part create a separate `js` file which will contain your solution.

## Warmup

### Hello World
Create a file named `hello.js`. Write a command line application which prints the string 'Hello World' to the console. You should be able to run your application by executing the following command
  ```sh
  node hello.js
  ```

### Hello Someone
Create a file named `hello_someone.js`. Write an application which takes **one** command line argument and logs the string 'Hello, <argument>' to the console, where <argument> is replaced by the appropriate cammand line argument

For Example:
  ```sh
  node hello_someone.js Peter
  ```
Displays the string "Hello, Peter" on the console. 

## Math Fun

### Addition
Create a file named `add.js`, which takes **two** command line arguments, which are both integers and log their sum to the console. 

For Example
  ```sh
  node add.js 2 3
  ```
Displays "5" on the console.

### Subtraction
Create a file named `subtract.js`, which behaves just like the `add.js`, but subtracts the two numbers.

### Multiplication
In a file named `multiply.js`, write code to achieve multiplication of two numbers.

### Division
In a file named `divide.js`, write code to achieve division of two numbers. 

# Bonus

## Make it user friendly
Modify the the `add`, `subtract`, multiply`, `divide` applistions to work with a more intuitive user input

For example
  ```sh
  node add.js 2+3
  node subtract.js 4-3
  node multiply.js 2*3
  node divide.js 4/2
  ```

## Calculator
Combine you four different applications into one master application called `calculator.js` which takes **three** command line arguments. The first is a string which describes a mathematical operation, and the next two are integers.

For Example
  ```sh
  node calculator.js add 2 3  => 5
  node calculator.js subtract 2 3 => -1
  node calculator.js multiply 4 5 => 20
  ```




