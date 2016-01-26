var gaMod = function {
//remove nav
var nav = document.querySelector('#gb');
//remove foot
var foot = document.querySelector('#fbar');
//remove promo
var promo = document.querySelector('#prm');
//remove mic image
var newMicImg = document.createElement('img');
 var gaGearImg = 'https://dl.dropboxusercontent.com/s/whkficbkox6t66a/Screen%20Shot%202016-01-24%20at%205.43.31%20PM.png';

micImg.childNodes[0].remove()
newMicImg.setAttribute('src', gaGearImg)
micImg.appendChild(newMicImg)
newMicImg.style.height='28px';
newMicImg.style.paddingTop ='8px';

document.body.style.backgroundColor="black";

nav.remove();
foot.remove();
promo.remove();

}
