bedroomimg = "";
status = "";

function preload(){

    bedroomImg = loadImage("bedroom.jpg");

}

function setup(){

    canvas = createCanvas(800,600);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status :  Detecting Objects";

}

function modelLoaded(){

    status = true;
    objectDetector.detect(bedroomimg, gotResults);
    
}

function gotResults(error, results){

    if(error){

        console.log(error);

    }

    else{

        console.log(results);

    }

}