function goBack(){

let voice=new SpeechSynthesisUtterance("Bye Bye")
speechSynthesis.speak(voice)

setTimeout(()=>{
location.href="index.html"
},1000)

}

function magic(){
location.href="magic.html"
}
