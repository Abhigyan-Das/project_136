leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

        canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}
function modelLoaded() {
    console.log("model loaded");
}
function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x; 
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = "+ leftWristX+"right wrist x = "+ rightWristX+ "difference = "+ difference)
    }
    
}
function draw() {
    background("#808080");
    fill("#0000FF");
    stroke("#0000FF");
    textSize(difference);
    text("Abhigyan Das", 50, 400);
    
}