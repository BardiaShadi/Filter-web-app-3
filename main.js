noseY=0;
noseX=0;
function preload(){
  mustache=loadImage("https://i.postimg.cc/63CSdvBq/mustache.png");
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
  if(results.length > 0){
  console.log(results);
  noseY=results[0].pose.nose.y;
  noseX=results[0].pose.nose.x;
  console.log("nose x = " + results[0].pose.nose.x);
  console.log("nose y = " + results[0].pose.nose.y);
  }
}

function modelLoaded() {
  console.log('PoseNet is Initialized');
}
function draw(){
image(video, 0, 0, 300, 300);
image(mustache, noseX, noseY, 25, 25);
}
function save(){
  save('download.png'); 
}
