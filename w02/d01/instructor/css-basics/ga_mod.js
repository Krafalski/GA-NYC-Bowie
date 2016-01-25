var gaMod = function() {
  var nav = document.querySelector('#gb');
  var footer = document.querySelector('#fbar');
  var promo = document.querySelector('#prm');
  var micImg = document.querySelector('.gsst_a');
  var newMicImg = document.createElement('img');
    var gaGearImg = 'https://dl.dropboxusercontent.com/s/whkficbkox6t66a/Screen%20Shot%202016-01-24%20at%205.43.31%20PM.png';

    micImg.childNodes[0].remove()
    newMicImg.setAttribute('src', gaGearImg)
    micImg.appendChild( newMicImg )
    newMicImg.style.height = '28px'
    newMicImg.style.paddingTop = '8px'


  nav.remove();
  footer.remove();
  promo.remove();
}
gaMod()
