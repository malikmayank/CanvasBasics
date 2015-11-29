function initCanvas() {
  // This line will grab the canvas element by sending id property of
  // the canvas to the getElementById() function
  var c=document.getElementById("myCanvas");

  // from the canvas we need to grab it's context.
  var ctx = c.getContext("2d");
  // from here, we can actually start calling methods on ctx to start
  // drawing on our canvas

  ctx.beginPath();
  ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  ctx.moveTo(110,75);
  ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
  ctx.moveTo(65,65);
  ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  ctx.moveTo(95,65);
  ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  ctx.stroke();


  /* // Alternate way of doing the same thing
  var path=new Path2D();
  path.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  path.moveTo(110,75);
  path.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
  path.moveTo(65,65);
  path.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  path.moveTo(95,65);
  path.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  ctx.stroke(path);
  */

}
