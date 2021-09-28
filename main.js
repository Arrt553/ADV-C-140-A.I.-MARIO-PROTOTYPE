img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  img = loadImage("mario.png");
  
}

function setup() {
  var canvas = createCanvas(650, 400);
  canvas.center();
  
  video = createCapture(VIDEO);
  video.size(600,300);
  video.hide();
  
  posenet = ml5.poseNet(video,modelLoaded);
  posenet.on("pose",gotPoses);
}
function modelLoaded(){
  console.log("Model Loaded!");
}

function gotPoses(results,error){
  if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("NoseX = " + noseX + "and NoseY = " + noseY);

  }
  else{
    console.log(error);
  }
}


function draw() {
  background("#D3D3D3");
 
  image(img,marioX, marioY, 40,70);
  
  if(noseX < 300){
    marioX = marioX - 1;
  }
  if(noseX > 300){
    marioX = marioX + 1;
  }
  if(noseY < 150){
    marioY = marioY - 1;
  }
}


