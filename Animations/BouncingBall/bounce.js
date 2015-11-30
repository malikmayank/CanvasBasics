
var c;
var ctx;
var x=250;
var y=50;
var dx=5;
var dy=5;

function draw() {
  c = document.getElementById('canvas');
  ctx = c.getContext('2d');
  drawBall();
  window.requestAnimationFrame(draw);
}

function drawBall()  {
  ctx.clearRect(0,0, c.width, c.height);
  ctx.beginPath();
  ctx.fillStyle="teal";
  // Draws a circle of radius 20 at the coordinates x,y on the canvas
  ctx.arc(x,y,20,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  
  // Boundary Logic
  if( x-20<0 || x+20>c.width)  {
    dx=-dx;
  }
  if( y-20<0 || y+20>c.height)  {
    dy=-dy;
  }
  x = x + dx;
  y = y + dy;

}
