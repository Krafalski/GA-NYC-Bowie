=======
ring1.addEventListener('click', function(evt) {
    alert('ring 1 was clicked');
    evt.stopPropagation();
});
ring2.addEventListener('click', function(evt) {
    alert('ring 2 was clicked');
    evt.stopPropagation();
});

ring3.addEventListener('click', function(evt) {
    alert('ring 3 was clicked');
    evt.stopPropagation();
    setTimeout(function(){
        alert('clearing interval');
        clearInterval(myID);
    }, 6000);

    var myID = setInterval(function() {
        alert('2 seconds have passed');
    }, 2000);


});

>>>>>>> 0db15e4792def74cd47d73566bc3707c1ed4687e
