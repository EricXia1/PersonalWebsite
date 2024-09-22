var i = 0;
var txt = "Hi, welcome to my website."
var speed = 50

function typinganimation(){
    document.getElementById("greeting-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typinganimation, speed)
}

typinganimation()