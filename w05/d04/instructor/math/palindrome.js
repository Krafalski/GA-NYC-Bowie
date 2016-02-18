// Elton's Solution

var max = 999 * 999;
var min = 100 * 100;
var pali = [];
for ( var i = min; i < max; i++) {
  var j = parseInt(i.toString().split("").reverse().join(""));
  if ( i === j ) {
    pali.push([i]);
  }
    pali.slice(-1)[0];
}
// Elton: 997799
// Max's Solution
var num1;
var num2;
var palindrome = 0;
String.prototype.reverse = function() {
  var arr = [];
  for (var i = this.length-1; i >= 0; i--) {
    arr.push(this[i]);
  }
  return arr.join('');
}
var x = 100;
while (x <= 999) {
  var y = 100;
  while (y <= 999) {
    var prod = x * y;
      var check1 = prod.toString();
    var check2 = check1.reverse();
    if (check1 === check2) {
      if (prod > palindrome) {
        palindrome = prod;
        num1 = x;
        num2 = y;
      }
    }
    y++;
  }
  x++;
}
console.log(num1 + ' * ' + num2 + ' = ' + palindrome);
//913 * 993 = 906609

// Harry's Solution
var isPalindrome = function(x){
    var value = x.toString();
    return value === value.split('').reverse().join('');
};

var x, y, currentNum, largest = 1;
for(var i = 100; i < 1000; i++) {
    for(var j = 100; j < 1000; j++) {
        currentNum = i*j;

        if !((isPalindrome(currentNum) && curentNum > largest)) break;
        
        largest = currentNum;
        x = i;
        y = j;
    }
    console.log(j);
}

console.log('The largest palindrome is ', x, " x ", y, " = ", largest);

// Dan's Solution
function getPalindrome(a, b) {
  var foundAPalindrome = false;
  var str;
  var leftSwitch = true;

  while (!foundAPalindrome) {
    str = (a * b).toString();
    foundAPalindrome = true;
    for (var i = 0; i < str.length / 2; i++) {
      if (str[i] != str[str.length - 1 - i]) {
        foundAPalindrome = false;
      }
    }

    if (!foundAPalindrome) {
      if (leftSwitch) {
        a--;
      }
      else {
        b--;
      }
    }

    leftSwitch = !leftSwitch;
  }

  console.log(a, b, a * b);
}
