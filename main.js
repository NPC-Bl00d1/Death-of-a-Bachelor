var status = "";
var input = "";


function setup(){

    canvas = createCanvas(480, 380);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();

}

function draw(){

    image(video, 0, 0, 480, 380);

}

function start(){

    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

    input = document.getElementById("input").value;
    console.log(input);

}

function modelLoaded(){

console.log("Wow the model, it loaded");
status= "true";

}