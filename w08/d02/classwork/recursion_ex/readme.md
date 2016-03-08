### Recursion Fun!

#### Warm up

Consider a simple counter implemented with a loop

``` javascript
let counter = 10;

while (counter > 0) {
    console.log(counter--);
};
```

Use recursion to implement this in a functional manner. Write a
function `counter(max)` which calls itself recursively and logs to the
console all the numbers counting down from `max`.

#### Let's keep it going

Now implement a recursive function which computes the factorial of a
number.

HINT: The factorial of a positive integer is the product of all
integers starting from one up to that number.

```
factorial(1) = 1
factorial(2) = 1 x 2 = 2
factorial(3) = 1 x 2 x 3 = 6
factorial(4) = 1 x 2 x 3 x 4 = 24
```

#### Even more math

The nth fibonacci number `F(n)` in mathematics is defined recursively
as `F(n) = F(n - 1) + F(n - 2)`. That is, any number in the
sequence is the sum of the previous two. The sequence starts with two
1s. That is `F(1) = 1`, `F(2) = 1`. Write a recursive function
`fibonacci(n)`, which computes the nth fibonacci number.

#### How about strings

Write a recursive function `reverse` which takes a string as an
argument and reverses it.

#### Curry on

It is now time to push you understanding of functional programming to
the next level. Write a function `recall(word)` which can be chain
called like so 

``` javascript
recall('Sorry,')('Your')('whole')('life')('is')('just')('a')('dream.')('I')('have')('been')('trying')('to')('tell')('you,')('someone')('has')('erased')('your')('memory.')();

// => "Sorry, Your whole life is just a dream. I have been trying to tell you, someone has erased your memory. "
```
Notice that if you pass a string as an argument the function *saves*
it. If you invoke it with no argument at the end it will log to the
console all of the previous arguments concatenated together. 

#### Nerd alert

Recursion relations are most often used in fractal math. Use
javascript and your knowledge of recursion to construct a
[Sierpinki Triangle](https://en.wikipedia.org/wiki/Sierpinski_triangle). You
are provided with starter code which has all the visualization code
written for you. It uses HTML Canvas and has two functions
implemented. `initialTriangle()` draws the initial(biggest) triangle. You
are also provided with a helper function `drawTriangle(x1, y1, x2, y2,
x3, y3, color)` which you can use to draw a triangle with vertices
`(x1, y1)`, `(x2, y2)`, `(x3, y3)`. Write a recursive function
`sierpinski` which recursively builds the triangles. 
