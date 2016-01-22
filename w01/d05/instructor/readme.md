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

#//foo()--> bar()

8  // 13

3,8,8 // 1

3 // 8

```JavaScript




## Argument Evaluation
1. There are no datatypes for formal parameters.
2. There is no type-checking for passed arguments.
3. Argument length is never compared to formal params, thus will never throw an "Argument Mismatch".
4. Any missing args (fewer than the formal params), no error, but will receive 'undefiend' for the named params.
5. Extra Arguments are simply appended to the _arguments_ object.





















