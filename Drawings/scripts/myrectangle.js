function initCanvas() {
  // This line will grab the canvas element by sending id property of
  // the canvas to the getElementById() function
  var c=document.getElementById("myCanvas");

  // from the canvas we need to grab it's context.
  var ctx = c.getContext("2d");
  // from here, we can actually start calling methods on ctx to start
  // drawing on our canvas

  for(var i=10; i<200; i+=10) {
      myRect(ctx,i,i,i+100,i+100);
  }
}

function myRect(context, xmin, ymin, xmax, ymax) {
  context.beginPath();
  context.moveTo(xmin, ymin);
  context.lineTo(xmax, ymin);
  context.lineTo(xmax,ymax);
  context.lineTo(xmin,ymax);
  context.lineTo(xmin,ymin);
  context.stroke();
}
