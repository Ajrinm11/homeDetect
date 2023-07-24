img="";
Status="";
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640, 420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML="Status: Detecting Objects"
}

function modelLoaded(){
console.log("Model loaded!");
Status=true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }

    console.log(results);
}

function draw(){
image(img, 0, 0, 640, 420);
stroke("#FF0000");
noFill();
rect(60, 65, 280, 330);
textSize(18);
text("dog",80,90);

stroke("#0000FF");
noFill();
rect(300, 75, 260, 330);
text("cat", 430, 110);
}