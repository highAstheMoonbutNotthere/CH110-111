p1 = ""
p2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera")
Webcam.attach("#camera")
function capture() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img src='" + data + "' id='pick'>"
    })
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UXX9aMFX1/model.json", modelLoaded);
function modelLoaded() {
    console.log("Model Is Probably Loaded, Maybe");
}

function speak() {
    var synth = window.speechSynthesis;
    data1 = "" + p1;
    data2 = "" + p2;
    utterThis = new SpeechSynthesisUtterance(data1 + data2);
    synth.speak(utterThis);
}

function identify() {
    img = document.getElementById("pick");
    classifier.classify(img, gotresult);
}

function gotresult(error, result) {
if(error){
    console.error(error);
}
else{
    console.log(result);
    p1 = result[0].label;
    p2 = result[1].label;
    document.getElementById("emotionname").innerHTML = p1;
    document.getElementById("emotionname2").innerHTML = p2;
    speak();
    if(p1=="amazing"){
        document.getElementById("emoji1").innerHTML = "👌";
    }
    
    if(p1=="victory"){
        document.getElementById("emoji1").innerHTML = "✌";
        
    }
    
    if(p1=="best"){
        document.getElementById("emoji1").innerHTML = "👍";
    }
    
    if(p2=="amazing"){
        document.getElementById("emoji2").innerHTML = "👌";
    }
    
    if(p2=="victory"){
        document.getElementById("emoji2").innerHTML = "✌";
        
    }
    
    if(p2=="best"){
        document.getElementById("emoji2").innerHTML = "👍";
    }    
}

}