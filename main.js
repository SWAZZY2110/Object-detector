img = " ";
status = "";
objects = []
//Cat
xPos = 0;
yPos = 0;
width = 0;
height = 0;
object = "";
conf = 0;
//Dog
xPos2 = 0;
yPos2 = 0;
width2 = 0;
height2 = 0;
object2 = "";
conf2 = 0;

function preload() {
  img = loadImage("encyclopedia.jpeg");
}
function setup() {
  canvas = createCanvas(400, 300);
  canvas.center();
  objectdetector = ml5.objectDetector("cocossd", modelLoaded);
  
}
function draw() {
  image(img, 0, 0, 400, 300);
  /*fill("#FFFF00");
  text(object2, 150, 47);
  noFill();
  stroke("#FFaa00");
  rect(xPos2, yPos2, width2, height2);

  fill("#FFFF00");
  text(object, 320, 47);
  noFill();
  stroke("#FF2200");
  rect(xPos, yPos, width, height); */



  if(status != "" ){
    objectdetector.detect(img, gotResult);
    for(var i = 0 ; i < objects.length ; i++){
  document.getElementById("status").innerHTML = "status:object detected"
  percent = Math.floor(objects[i].confidence*100)
  fill("yellow")
  text(objects[i].label + " " + percent + "%", objects[i].x-20, objects[i].y-100)
  noFill();
  stroke("#F2A56B")
  strokeWeight(5)
  rect(objects[i].x-20, objects[i].y-100, objects[i].width, objects[i].height)
  document.getElementById("baby").innerHTML = "Image has " + objects.length + " big objects."
    }
  }
}
function modelLoaded() {
  console.log("Coatrack");
  status = true;
}
function gotResult(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    objects = result
   /* xPos = result[0].x-20;
    xPos = result[0].y-100;
    xPos2 = result[1].x-20;
    xPos2 = result[1].y-100;
    conf = result[0].confidence;
    conf2 = result[1].confidence;
    height = result[0].height;
    height2 = result[1].height;
    width = result[0].width;
    width2 = result[1].width;
    object = result[0].label;
    object2 = result[1].label;
    */
  }
}
