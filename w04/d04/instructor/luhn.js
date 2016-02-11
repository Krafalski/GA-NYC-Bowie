var number = process.argv[2];

var arrayOfDigits = number.split('').reverse();

var sum = 0;
arrayOfDigits.forEach(function(el, index) {
    if (index % 2 === 1) {
        var doubled = parseInt(el) * 2;
        if (doubled > 9) {
            var twoDigitArray = doubled.toString().split('');
            doubled = parseInt(twoDigitArray[0]) + parseInt(twoDigitArray[1]);
            // sum += newNumber;
        }
        sum += doubled;
    } else {
        sum += parseInt(el);
    }
});

if (sum % 10 === 0) {
    console.log('Let\'s go on Amazon');
} else {
    console.log('You are a poor cyber criminal');
}

// console.log(arrayOfDigits);
