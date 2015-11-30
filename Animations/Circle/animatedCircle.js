
var c;
var ctx;
var counter=0;
var angle = 0;// this line added to calculate radius everytime a frame is drawn

function drawCircle() {
    // drawCircle is being passed to requestAnimationFrame.
    // This causes our circle to drawn manu times over.
    // We won't see an animation until our frames are identical.
    counter = counter + 1;
    console.log("This is circle number " + counter);
    // Clear out the canvas
    ctx.clearRect(0, 0, c.width, c.height);
    // Repaint the canvas background
    ctx.fillStyle = "#CCCCCC";
    ctx.fillRect(0, 0, c.width, c.height);
    // Draw the circle
    ctx.beginPath();
    var radius = 25 + 150 * Math.abs(Math.cos(angle));  // this line changes the radius
    ctx.arc(c.width/2, c.height/2, radius, 0, Math.PI * 2, false);
    ctx.closePath();
    // Color the circle
    ctx.fillStyle = "teal";
    ctx.fill();

    angle += Math.PI / 64;   /////// this line changes the angle
}

function draw() {
  c = document.getElementById('canvas');
  ctx = c.getContext('2d');
  drawCircle();
  window.requestAnimationFrame(draw);
}
