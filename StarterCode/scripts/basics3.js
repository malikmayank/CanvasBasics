function init() {
  // This line will grab the canvas element by sending id property of
  // the canvas to the getElementById() function
  var canvas=document.getElementById("myCanvas");

  // from the canvas we need to grab it's context.
  var context=canvas.getContext("2d");
  // from here, we can actually start calling methods on ctx to start
  // drawing on our canvas
}
