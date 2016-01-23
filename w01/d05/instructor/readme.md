#Functions and Scope

A function is a statement or a group of statements that can be called anywhere in the program so that the statements inside the function do not need to be written over and over again.

When writing functions in JavaScript, think of a function as an object, like a string or a number - this means that a function can be passed to other functions as an argument and can be used just like any other object we've been working with.

Functions are essential to write JavaScript and keep the code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).


A function can be defined using two different syntaxes. For example, we can define a function `speak` that receives one argument in either of the following ways:

...as a **function statement (must have a name in this form)**
```javascript
function speak(words){
  console.log(words);
}
```
... or as a **function expression**
```javascript
var speak = function(words){
  console.log(words);
}
```


## Argument Evaluation
1. There are no datatypes for formal parameters.
2. There is no type-checking for passed arguments.
3. Argument length is never compared to formal params, thus will never throw an "Argument Mismatch".
4. Any missing args (fewer than the formal params), no error, but will receive 'undefiend' for the named params.
5. Extra Arguments are simply appended to the _arguments_ object.



##Hoisting

// hoisting def here..

###Some Hoisting examples

```Javascript
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo());
```

##Scope

Scope is built during the Lexical Analysis part of the Compilation phase. When scope is built during this phase it's called **Lexical Scope**. This is very common in many programming languages.

Let's see how it works. Here's the code we'll work with:

> Note: You might want to ask students to take a few minutes to break down the functionality in these functions.

```javascript
var firstName = 'John'; // 1
var lastName = 'Dowd'; // 2
var age = 19; // 3

function displayPerson(fname, lname){ //4, 5
  var prefix = 'Mr'; // 6
  var fullName = null; // 6

  function getFullName(){ // 7
    var suffix = "Esq.";  // Everybody's a lawyer, eh.
    return  fullName = prefix + " " + fname + " " + lname + " " + suffix;
  };

  return getFullName();
};

function removeYears(){ // 8
  var minusYears = 10, age = 49;
  return age - minusYears;
};

console.log(displayPerson(firstName, lastName));
console.log(removeYears());

```

Node will load this file and pass the source code on to it's Javascript VM.  Then, the VM will run do a Lexical Analysis of this source and build Variable Scope as described in the following steps:

1. Found 'var firstName' variable declaration.  
Put firstName variable in Global Scope.  
2. Found 'var lastName' variable declaration.  
Put lastName in Global Scope.  
3. Found 'var age' variable declaration.  
Put age in Global Scope.  
4. Found 'var displayPerson' declaration.  
Put age in displayPerson in Global Scope.

  - Notice that displayPerson's value is a function. So, create a inner scope and process this function.

5. Found the firstName and lastName declarations.

   > Note: functions arguments behave just like local variables.  Put them in the displayPerson function scope.  

6. Found prefix, fullName variable declarations.  
Put them in the displayPerson function scope.  
7. Found getFullName declaration.  
Put getFullName in the displayPerson function scope.

 - Notice that getFullName is a function. So, create an inner scope and  process this function.
 - All done with getFullName function, no more variable declarations.
 - All done with displayPerson function, no more variable declarations.

![Scope](https://i.imgur.com/Ex9a0qB.png)

8. Found removeYears variable declaration.
Put removeYears in Global scope.  

**Notice that removeYears value is a function. So, create a inner scope and process this function.**

9. Found age and minusYears variable declarations.  
Put these in the function's scope.

![](https://i.imgur.com/cA6kaw5.png)



## The Terminology of Scope - Codealong (10 mins)


There are different terminologies to talk about scope in Javascript. If you read about `(function|global|lexical|public/private)scope` or `closure` or `namespace`, all these keywords are referring to the `scope`, one way or another.

#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. If we declare a variable, it's defined globally:

```javascript
var name = 'Gerry';
```

Global scope can be really confusing when you run into namespace clashes. You won't want to use global scoping for all your variables, as using global scope the right way is quite complex, but every Javascript program uses the global scope in one way or another.

#### Local scope

Local scope refers to any scope that is defined right past the global one. If you define a function, this function will have its own scope inside the body of the function. Any function defined inside another function has a also a local scope and can refer to the parent scope, but this logic doesn't work the other way around.

#### Function scope - can't get inside from outside!

A variable defined inside a function cannot be accessed outside the function, this is the scope function:

```javascript
var a = "this is the global scope";
function myFunction() {
	var b = "this variable is defined in the local scope";
}
myFunction();
alert(b);
```

This will throw a reference error because the variable `b` is not accessible outside of the scope if the function where it is defined.

#### Accessing variables in the same scope

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
	return a + " " + name;
}

sayHello("WDI");
=> "Hello WDI";
```

#### Nested function scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
  var a = 1;

  function getScore () {
    var b = 2,
    c = 3;

    function add() {
    return a + b + c;
    }

    return add();
  }

  getScore();
  => 6
```



##`This` Keyword

The `this` keyword is an object provided by the language that _always_ executes in the **runtime** context. What does this mean? Previously, we've talked about scope as determined by lexical analysis; `this` does not get **bound** during lexical analysis, rather it is only evaulated during runtime, or the latest possible moment. 


A function's `this` keyword is always referring to the current context

#### This in the Global context

In the global scope, this refers to the global object (in a browser):

```javascript
this === window
=> true

this.document === document
=> true

this.aValue = "WDI";
=> "WDI"
console.log(window.aValue);
=> "WDI"
```

#### As an object method

If a function is part of an object (we then call it a method), `this` refers to the object that has been defined and called:

```javascript
var wdi = {
  name: "WDI",
  whatsTheName = function() {
    return this.name;
  }

wdi.whatsTheName();
=> "WDI"
```







