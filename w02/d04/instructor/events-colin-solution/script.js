window.onload = function() {
  var container = document.querySelector('.container');

  (function game() {

    var addClassEvent = function(event) {
      event.stopPropagation();
      this.classList.add('no-hover');
    }

    function onMouseEnterJS(event) {
      event.target.addEventListener('click', addClassEvent, false)

      if (document.querySelectorAll('.no-hover').length == 3) {
        container.id = 'flash';
      }
    }

    function removeListener(event) {
      event.target.removeEventListener('click', addClassEvent)
      event.currentTarget.id = ''
      event.target.classList.remove('no-hover')
    }

    container.addEventListener('animationstart', onMouseEnterJS, false)
    container.addEventListener('animationend', removeListener, false)
  })()
};
