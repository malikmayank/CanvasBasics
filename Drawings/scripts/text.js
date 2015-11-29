function initCanvas() {
  // This line will grab the canvas element by sending id property of
  // the canvas to the getElementById() function
  var c=document.getElementById("myCanvas");

  // from the canvas we need to grab it's context.
  var ctx = c.getContext("2d");
  // from here, we can actually start calling methods on ctx to start
  // drawing on our canvas

  ctx.fillStyle = "white";  // 140 named colors
  ctx.font="36px Impact";
  ctx.lineWidth = "3"; // stroke width in pixels
  ctx.textAlign = "center"; // start, end, right, left, center
  // ctx.textBaseLine = alphabetic; // top, hanging, middle, alphabetic (default), ideographic, bottom.
  // ctx.direction = "inherit"; // ltr, rtl, inherit (default)

  // ctx.fillText("Hello World", 100, 30);
  ctx.strokeText("Hello World", 100, 30);

}
