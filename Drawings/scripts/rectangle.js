function initCanvas() {
  // This line will grab the canvas element by sending id property of
  // the canvas to the getElementById() function
  var c=document.getElementById("myCanvas");

  // from the canvas we need to grab it's context.
  var ctx = c.getContext("2d");
  // from here, we can actually start calling methods on ctx to start
  // drawing on our canvas

  // fillRect draws a filled rectangle
  ctx.fillRect(100,100,100,100);

  // strokeRect draws an outlined rectangle
  ctx.strokeRect(80,80,140,140);

  ctx.fillStyle = "blue";
  // Start at (0,0) and draw a 50px x 50px blue rectangle.
  ctx.fillRect(0,0,50,50);
  // Start at (0,0) and clear a 25px x 25px rectangle.
  ctx.clearRect(0,0,25,25);

  // clear the canvas
  // ctx.clearRect(0, 0, c.width, c.height);

}
