var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var one=event.results[0][0].transcript;
    console.log(one);
    document.getElementById("textbox").innerHTML=one;
    if (one=="take my selfie")
    {
        console.log("taking selfie --");
        speak();
    }
}
function speak()
{
    var synth= window.speechSynthesis;
    speak_data="Taking your selfie in five seconds";
    utter=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function takeSnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}