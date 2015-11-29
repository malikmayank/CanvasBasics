function initCanvas() {
  // This line will grab the canvas element by sending id property of
  // the canvas to the getElementById() function
  var c=document.getElementById("myCanvas");

  // from the canvas we need to grab it's context.
  var ctx = c.getContext("2d");
  // from here, we can actually start calling methods on ctx to start
  // drawing on our canvas

  ctx.beginPath();

  // moveTo hovers the pen over the canvas but does not draw
  ctx.moveTo(50, 50);

  // lineTo implies that we put the pen down on canvas
  ctx.lineTo(60, 200);
  ctx.lineTo(100,50);
  ctx.lineTo(50,50);

  // nothing will draw until we call a fill() or a stroke() command to
  //  finish this path
  ctx.stroke();
  //ctx.fill();

}
