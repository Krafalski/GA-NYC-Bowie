
var htmlElements = {

  timer: document.querySelector("#timer"),
  reset: document.querySelector("#reset"),
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause")

  var timerId;
  var seconds = 0;
  var running= true;

  function upDateTime(){
    seconds++;
    timerId= document.getElementById('timer').innerText= seconds;
  }

var startFunction = function() {

  var currenTime = document.getElementById('timer').innerText = seconds;
  setInterval(upDateTime, 1000);

}

var pauseFunction = function() {
if(running)  {
  return
} 
timerId = document.getElementById('timer').innerText = seconds;
clearInterval(currenTime);

}


var resetFunction = function () {

  clearInterval(timerId);
  seconds = 0;
  document.getElementById('timer').innerText= "Stop Watch";
}


start.addEventListener('onclick', startFunction());

pause.addEventListener('onclick', pauseFunction());

reset.addEventListener('onclick', resetFunction());


// var intervalID = setInterval(func, delay);



}
