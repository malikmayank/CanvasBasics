

// THIS IS NOT WORKING

function initCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");


  var image = new Image();

  // Images in JavaSCript get loaded asynchronously.
  // If we need to do something after an image has loaded, we'll need to
  //  use this function below
  image.onload = function() {
    console.log("Loaded Image");
    // do something after the image is loaded
    // doSomething();
    ctx.drawImage(image, 0, 0, c.width, c.height);
    // toDataUrl() creates a text string that represents the photo.
    var savedImage = c.toDataUrl();
    console.log(savedImage);
    window.open(savedImage);
  }

  image.src = "images/sparta.jpg";
}
