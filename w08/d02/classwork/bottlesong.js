// function bottles (){
//
// for (var i=99; i>0; i--){
//  if (i===1){
//  console.log (i + " bottle of beer on the wall");
//  }
//  else {console.log (i + " bottles of beer on the wall");}
//
// }
//
// console.log (' no more bottles of beer on the wall . CELEBRATION!');
// };
//
// //another solution:
//
// for (var i=99; i>=0; i--){
//   switch (i){
//   case 0:
//    console.log('celebration')
//    break;
//
//    case 1:
//     console.log(`${i} bottle`)
//     break;
//
//   default:
//     console.log (`${i} bottles`)
//     break;
//   }
// }
//
// //another solution
//
// for (vari 99; i>=0; i--){
//   if (i!==0 && i!==0){
//   console.log (`${i}` bottles of beer on the wall)
//   }
//   if (i==1) console.log(`${i}` bottles of beer on teh wall);
//   if (i==0) console.log('celebration')
// }
//

//warning infinite loops right now
// var i =99;
// function bottlesRecursive (){
//   if (i===1){
//   console.log(i + " bottle of beer on the wall");
//   } else if (i===0){
//   return console.log (' no more bottles of beer on the wall . CELEBRATION!');
//   }
//   else { console.log (i + " bottle of beer on the wall");
//   i--;
//   bottlesRecursive(); }
//
// }
//
// console.log (' no more bottles of beer on the wall . CELEBRATION!');

//
// function bottleSong(i){
//   switch (i){
//     case 0:
//       return 'celebration';
//       break;
//     case 1:
//       return `${i} bottle`
//       console.log();
//     default:
//       return `${i} bottles`
//
//   }
// }
//
// //iterative approach use function above
// var i =99;
// var bottleLyrics = [];
// while (i>=0){
//   bottleLyrics.push(bottleSong(i--))
// }
// console.log(bottleLyrics)
//
// function bottleSongRecursion (n){
//   //base case where you want recursion to stop
//   if (n===0) return bottleLyrics;
// }
// bottleLyrics.push(bottleSong(i))


function countDown (i){
  //base case
  if (i===0){
    console.log(i);
    return;}
  console.log(countDown(i-1));
}



///

function factorial (n){
  if (n===1){
    return n;
  } else {

  n *  factorial (n-1);
  }
}

//n * n-1 * n-2...
//4 * 3 * 2 * 1
