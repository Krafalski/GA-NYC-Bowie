"use strict"
window.onload = function() {

  let h = 420;
  let w = 500;
  let minWidth = 1;
  let canvas = document.getElementById("canvas_area");
  let context = canvas.getContext("2d");

  // Call this function to draw a triangle
  let drawTriangle = (x1, y1, x2, y2, x3, y3, color) => {

      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.lineTo(x3, y3);
      context.lineTo(x1, y1);
      context.closePath();
      context.fillStyle = color;
      context.fill();

  }

  // Build your recursive function here
  // let sierpinski = (some arguments) => {
      // function body
  // }


  
  //  function which draws the inital triangle
  let initialTriangle = () => {
    //first triangle
    let x1 = w/2;
    let y1 = 0;
    let x2 = 0;
    let y2 = h;
    let x3 = w;
    let y3 = h;
    
    drawTriangle(x1, y1, x2, y2, x3, y3, "#000");
    
    let top = h / 2;
    let left = w / 4;
    
    sierpinski(h / 2, w / 2, top, left);
  };

  
  initialTriangle();

};
