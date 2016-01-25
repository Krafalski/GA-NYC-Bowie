# Solution to MTA

I have provided two very similar looking solutions to the MTA, which actually illustrate very different programming principles. First look at the `mta_object_solution.js`. This code creates a single object literal `mta` which has two parameters: `data` and `hub` which are hardcoded in, and several methods, which perform the functions we want. If you paste that object in the node console you can go ahead and play around with it. You can call any of the methods to get the desired results.

```javascript
mta.lines();
mta.stops('6');
mta.distance('L', '8th', '6', '28th');
```

The problem with this single object is that if I want to change my mta structure to accommodate another line for example I will have to rewrite the whole object with different data. Since we like to keep it DRY, we should use the constructor pattern illustrated in the `mta_solution.js` file. We can create a constructor function `Mta` which takes the data as an argument and builds us an object with all the desired functionality. The end of the code illustrates how we can get different versions of our object with very little code:

```javascript
var smallMta = new Mta(smallMtaData);
var mediumMta = new Mta(mediumMtaData);
var largeMta = new Mta(largeMtaData);
```

In this case `mediumMta` will be the same as our previous `mta` object.

For your Hangman assignment you will have to build two constructor functions (`Letter()` and `Word()`) and one object literal `game`. Good luck!
