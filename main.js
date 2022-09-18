NoseX = 0;
NoseY = 0;
function preload()  {
   img = loadImage("https://i.postimg.cc/QMfz1j25/Mustache.png");

}
function setup()  {
canvas= createCanvas(400,400)
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}
function modelLoaded() {
   console.log('Project is Intialized'); 
}
function gotPoses(results) {
if(results.length>0)  {
   console.log(results);
   NoseX = results[0].pose.nose.x-32;
   NoseY = results[0].pose.nose.y-5;
   console.log('Nose x = ' + results[0].pose.nose.x)
   console.log('Nose y = ' + results[0].pose.nose.y)
}

}




function draw() {
image(video,0,0,400,400);
image(img,NoseX, NoseY,70,50)
}

function takesnapshot() {
   save("PRAVEEN");
}
