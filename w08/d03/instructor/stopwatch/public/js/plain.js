'use strict';

console.log('plain.js linked');

function Display(parentDOMElement) {
  this.parent = parentDOMElement;
  this.domElement = document.createElement('div');
  
  this.domElement.innerHTML = '0';

  this.update = function(value) {
    this.domElement.innerHTML = value.toFixed(1) + 'seconds have elapsed';
  };

  this.render = function() {
    this.parent.appendChild(this.domElement);
  };
  this.render();
};

function Button(parentDOMElement, name, action) {
  
  this.domElement = document.createElement('button');
  this.domElement.innerHTML = name;
  
  this.domElement.addEventListener('click', function() {
    action();
  });

  this.parent = parentDOMElement;

  this.render = function() {
    this.parent.appendChild(this.domElement);
  };

  this.render();
};

function Timer (parentDOMElement, name) {

  this.parent = parentDOMElement;

  this.domElement = document.createElement('div');
  
  this.time = 0;

  this.name = name;

                                
  let timerId;

  let tick = () => {
    this.time += 0.1;
    this.display.update(this.time);
  };
  
  this.start = () => {
    if (!timerId) {
      timerId = setInterval(function() {
        tick();
      }, 100);
    }
  };

  this.stop = () => {
    clearInterval(timerId);
    timerId = undefined;
  };

  this.reset = () => {
    this.time = 0;
    this.stop();
    this.display.update(this.time);
  };

  this.render = () => {
    let name = document.createElement('p');
    name.innerHTML = this.name;
    this.domElement.appendChild(name);
    this.display = new Display(this.domElement);
    let startButton = new Button(this.domElement, 'Start', this.start);
    let stopButton = new Button(this.domElement, 'Stop', this.stop);
    let resetButton = new Button(this.domElement, 'Reset', this.reset);
    this.parent.appendChild(this.domElement);
  };

  this.render();

};

let timer;

window.onload = function() {
  let $container = document.getElementById('container');
  timer = new Timer($container, 'Way cooler timer');
  timer = new Timer($container, 'Another cool timer');
  console.log('timer created');
};

