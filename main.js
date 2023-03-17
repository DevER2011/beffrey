statz = "";
video = "";
function preload(){
video = createVideo("video.mp4");
video.hide();
}
function setup(){
canvas = createCanvas(355,355);
canvas.center();
}
function draw(){
    image(video,0,0,355,355);
}
function ready(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("stats").innnerHTML = "Status : Detecting";
}
function modelLoaded(){
console.log("no way you won 5 times IN A ROW");
statz = true;
video.loop();
video.speed(1);
video.volume(0);
}