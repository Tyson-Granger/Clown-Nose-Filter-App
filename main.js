function preload() {
    clownnose = loadImage("https://i.postimg.cc/TYf07hr5/Clown-Nose.png");
}
noseX = 0
noseY= 0
function modelLoaded() {
    console.log("poseNet is initialized.") 
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()   
    video = createCapture(VIDEO)
    video.size(900, 900)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose",gotPose)
}
function gotPose(results) {
    if (results.length>0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + results[0].pose.nose.x);
        console.log("noseY = " + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 300, 300, 300)
    image(clownnose,noseX,noseY,30,30)
}
function take_snapshot() {
    save("filter.png")
}