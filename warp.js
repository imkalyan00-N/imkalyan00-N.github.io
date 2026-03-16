const btn=document.getElementById("enterUniverse")

if(btn){

btn.onclick=function(){

document.body.style.transition="1s"

document.body.style.transform="scale(15)"

setTimeout(()=>{

window.location.href="profile.html"

},1000)

}

}
