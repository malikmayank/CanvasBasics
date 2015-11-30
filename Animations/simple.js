
function draw() {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
  //This line will print multiple times
  console.log("draw function called");
  window.requestAnimationFrame(draw);
}
