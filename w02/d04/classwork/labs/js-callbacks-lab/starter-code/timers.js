window.onload = function() {

//config

var htmlElements = {

  timer: document.querySelector("#timer"),
  reset: document.querySelector("#reset"),
  start: document.querySelector("#start"),
  pause: document.querySelector("#pause")

}

timer(htmlElements);
//begin tracking time
function timer(htmlElements) {
        var seconds= 0;
        var running = false;
        var timerId;
        htmlElements.start.addEventListener('click', start);

        function upDateTimer(){
          timerId = setInterval(function(){
            seconds++;
            htmlElements.timer.innerText = seconds;
          }, 1000)
        }

          function start(){
          if (running) return;
          running = true;
          upDateTimer();
          }




//           function reset() {
//             timerId = clearInterval(upDateTimer);
//             seconds = 0;
//             timer.innerText = "Stop Watch"
//           }
//
//           function pause() {
//             timerId.setInterval() {
//               setInterval(function() {
//                 if(running = false) {
//                   timer.innerText = seconds;
//   }
//             }
//
//           }
// }


////HTML Stuff starts here


}




}
