//BEGIN LIBRARY CODE
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var ctx;
var c;

function initCanvas() {
  c=document.getElementById("myCanvas");
  ctx = c.getContext("2d");
  WIDTH = c.width;
  HEIGHT = c.height;
  return setInterval(draw, 10);
}

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//END LIBRARY CODE
/*
function draw() {
  clear();
  circle(x, y, 10);

  x += dx;
  y += dy;
}
*/

function draw() {
  clear();
  circle(x, y, 10);

  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;

  x += dx;
  y += dy;
}
