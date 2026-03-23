function goBack(){

let voice=new SpeechSynthesisUtterance("Bye Bye")

speechSynthesis.speak(voice)

setTimeout(()=>{

location.href="index.html"

},1000)

}

function magic(){

for(let i=0;i<80;i++){

let star=document.createElement("div")

star.innerHTML="✨"

star.style.position="fixed"

star.style.left=Math.random()*100+"%"

star.style.top=Math.random()*100+"%"

star.style.fontSize="30px"

star.style.transition="all 2s"

document.body.appendChild(star)

setTimeout(()=>{

star.style.transform="scale(0)"
star.style.opacity="0"

},100)

}

let rings=document.querySelectorAll(".ring1,.ring2")

rings.forEach(r=>{

r.style.boxShadow="0 0 100px cyan,0 0 200px magenta"

setTimeout(()=>{

r.style.boxShadow="0 0 20px cyan"

},2000)

})

}
