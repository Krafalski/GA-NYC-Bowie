// var names = ['Peter', 'Jason', 'Colin'];

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// var x = 3;

// function doThisManyATime() {
// }

// names.forEach(doThisManyATime);

// names.forEach(function(element){
//     console.log(element);
// });

function each(array, callback) {
    // do (call) callback array.length times
    // Pass each element of the array as the first
    // argument of callback
    // BONUS pass the index, and the whole array as
    // second and third arguments
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

each(names, function() {
    console.log();
    //should console.log each element
});

names.each(function(){});

Array.prototype.each = function each(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

var someArray;


someArray.each(function(){
    
});

each();

// Hey
// Hey
// Hey
