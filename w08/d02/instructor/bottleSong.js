/* Iterative vs recursive functions */
/* @author Jason Seminara */
/* @date 2016-03-08 */

function bottleSong(i){
  switch (i){
    case 0:
      return `celebration`

    case 1:
     return `${i} bottle`
    
    default:
      return `${i} bottles`
  }
}


// iterative approach
var i = 99;
var bottleLyrics = [];
while(i>=0){
  bottleLyrics.push(bottleSong(i--))
}
console.log(bottleLyrics)

/// showboating

for(var i=99, bottleLyrics = []; i>=0; i--){
  bottleLyrics.push(bottleSong(i))
}

console.log(bottleLyrics)




//Consider a simple counter implemented with a loop

let counter = 10;
​
while (counter > 0) {
    console.log(counter--);
};

//let's try recursion
function countDown(i){
  // base case
  console.log(i)
  if(i==0) return 
  countDown(i-1);
  return 
}

countDown(5)

