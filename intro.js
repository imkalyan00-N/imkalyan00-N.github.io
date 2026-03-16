let name=localStorage.getItem("username")

let text="Welcome "+name+" To Kalyan Universe"

let i=0

function type(){

if(i<text.length){

document.getElementById("welcome").innerHTML+=text.charAt(i)

i++

setTimeout(type,50)

}

}

type()

let voice=new SpeechSynthesisUtterance(text)
speechSynthesis.speak(voice)

setTimeout(()=>{

window.location.href="about.html"

},4000)
