//https://teachablemachine.withgoogle.com/models/1gc8wqXwG/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera= document.getElementById("cam");
Webcam.attach("#cam");
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'>";
    });
}
console.log("ml5 version", ml5.version);
var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bXqv5VdrU/model.json", model_loaded);
function model_loaded(){
    console.log("model is loaded");
}