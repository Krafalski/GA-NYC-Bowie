'use strict';

window.onload = () => {
  let $input = document.querySelector('input[type="text"]');
  let $button = document.querySelector('input[type="submit"]');

  $button.addEventListener('click', (evt) => {
    $.get(`/getCoordinates/${$input.value}`)
      .done((data) => {
        console.log(data.results[0].geometry.location);
        var $div = document.createElement('div');
        $div.innerHTML = data.results[0].geometry.location.toString();
        document.body.appendChild($div);
      });
  });
};
