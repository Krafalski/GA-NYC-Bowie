var creditNumber = 1901111111111111;
//9234123412341234 other sample
//
// 2121 2121 2121 2121
//expected result:6 + 6 + 6 + 6 = 24
// now 9111 1111 1111 1111;
// 12 +6 +6 +6= 30
var check =[];
var totalSum =0;

//look at a credit card number, digit by digit
//make into a string - could divide off the numbers, but string makes more sense to me at the moment


//NEEDED TO REVERSE IT--- Because right to left.
//NOT left to right...arg!


//BLAH- could have been a forEach loop

var numberString = creditNumber.toString();
var numberArray = numberString.split('');
var checkR=[];
//console.log(numberArray);
for (var i=0; i < numberArray.length; i++){
  makeNumber=parseInt(numberArray[i]);
  // console.log(typeof numberArray[0]);
  check.push(makeNumber);
}
check.reverse();
console.log(check);
// console.log(check);
// console.log(typeof check[0]);
//console.log(check.length);
//sweet now work with variable array check!

for (var j=0; j<check.length ; j++){
  var doubleCheck=0;
  var doubleString='';
  var doubleAdd;
  var doubleMakeNumber=[];
  var doubleMoreThan;
  var fixDoube="0";
  //var
    if ( j%2 === 1 ){
      doubleCheck = check[j]*2;
      //console.log ("dude");
      if (doubleCheck >=10){
        //console.log('DUDE')
        doubleString=doubleCheck.toString();
        doubleAdd = doubleString.split('');
        console.log(doubleAdd);
          for (k=0; k<2; k++){
            doubleMoreThan = parseInt(doubleAdd[k]);
            doubleMakeNumber.push(doubleMoreThan);
          }
        fixDouble = doubleMakeNumber[0] +doubleMakeNumber[1];
        console.log(fixDouble);
        totalSum +=fixDouble;

      } else {
        totalSum +=doubleCheck;
        console.log (totalSum + ' in %')}
    }
      //else {totalSum +=doubleCheck}
      else {
        console.log(check[j])
        totalSum +=check[j];

      }
    }
console.log(totalSum);
if (totalSum%10 ===0){
  console.log('valid!');
}
