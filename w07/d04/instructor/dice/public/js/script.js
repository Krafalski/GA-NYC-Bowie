console.log('script.js linked');

window.onload = () => {
  var numberOfDice = document.querySelector('.number');
  var rollButton = document.querySelector('.roll');
  var diceContainer = document.querySelector('.dice');
  
  rollButton.addEventListener('click', (evt) => {
    diceContainer.innerHTML = '';

    for(var i = 0; i < numberOfDice.value; i++) {
      createDie(diceContainer);
    }
  });
};

function createDie (parrentElement) {
  var die = document.createElement('div');
  die.className = 'die';
  var value = Math.floor(Math.random() * 6);
  die.innerHTML = '&#x268' + value + ';';
  parrentElement.appendChild(die);
};
