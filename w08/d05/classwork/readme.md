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

#### Real Life

Recursion is most often used when traversing trees. One tree structure
we've used extensively is actually the DOM. All the DOM selector
methods are implemented recursively. Construct a `walkTheDOM(node, func)` function
which takes two arguments: `node` is the node to start from, and
`func` is a callback which is to be be called on each node. Traverse
the DOM tree and call `func` on each node. Use the `walkTheDOM`
function to write a function `getElementByAttribute` which returns an
array of DOM elements which have a particular attribute.

