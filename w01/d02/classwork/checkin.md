# Javascript Basics Check In

Record the answers to the following IN THIS FILE where we have indicated 'answer here'. We won't be looking at any other files so make sure you save them in here before submitting!

## Question 1

```javascript
var a = 5
var b = 4
a = b
```

At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.

```
a = 4, b = 4. The assignment operator assigns the value on the right to the left
```

## Question 2

```javascript
var e = 3
var f = 9
var g = e + f
var f === g
var e = 3
```

At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.

```
e = 3, f = 9, g = 12. The strict comparison operator is **not** an assignment operator so it does nothing but return false. 
```

## Question 3

```javascript
var weather = "cloudy"
var weather === "cloudy"
```

What is the difference between these two statements? Explain your answer.

```
One is assignment, where a value is passed to a variable (=). The other is a strict comparison, which returns a true or false based on comparison on value **and** type (===).
```

## Question 4

```javascript
var x = 2

if(x === 3) {
  console.log("sushi is tasty");
} else if (x > 0) {
  console.log("sushi is delicious");
}
```

Imagine that you run this code in your browser. What would be the output? Explain your answer.

```
Answer: Console displays "sushi is delicious". x === 3 fails, and the else if gets executed.
```

## Question 5

```javascript
var food = "walnut"

if (food === "walnut"){
  console.log("i love walnuts");
}
```

Imagine that you run this code in your browser. What would be the output? Explain your answer.

```
Answer: Console displays: "i love walnuts". If condition is true so code inside gets executed.
```

## Question 6

```javascript
  var a = "4" + 10
```

What would happen here and why? 

```
Answer: a = "410". Weird javascript automatic type casting, in which I believe the string has precedence so 10 gets cast to a string and concatenated.
```

## Question 7

```javascript
 var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
```

What is the index value of "Michelangelo"?

```
Answer: 2. Standard 0 start of indices.
```

## Question 8

```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]

for(i = 0; i < 2; i++){
  console.log(turtles[i]);
}
```

* Examine the above code and imagine that you run it.
* What do you expect the outcome will be? Explain your answer.
* Would you make any changes to this code?

```
Answer: Console displays "Leonardo" and "Raphael". For loop terminates at i = 2 (which step does not get executed, since the check is before entering the loop). The natural thing to do would be to let the for loop traverse the whole array, which can be done by replacing the condition to i < 4.
```

## Question 9

* Write a function that returns an array with two names as strings inside of it. (don't overthink this)

```javascript
function names() {
	var name = ["Peter", "George"];
	return name;
}
```
