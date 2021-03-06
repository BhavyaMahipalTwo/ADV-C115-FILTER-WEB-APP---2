function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    image(video, 0, 0, 400, 400);
}

function take_snapshot(){
    
}

function modelLoaded(){
    console.log("PoseNet Is Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("X position = " + results[0].pose.nose.x);
        console.log("Y position = " + results[0].pose.nose.y);
    }
}
