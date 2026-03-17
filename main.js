// background stars

let canvas=document.getElementById("bg")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<200;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height
})
}

function drawStars(){
ctx.clearRect(0,0,canvas.width,canvas.height)

for(let s of stars){
ctx.fillStyle="white"
ctx.fillRect(s.x,s.y,2,2)

s.y+=0.5
if(s.y>canvas.height) s.y=0
}

requestAnimationFrame(drawStars)
}

drawStars()

// milkyway warp

function enterUniverse(){

let warp=document.createElement("div")

warp.style.position="fixed"
warp.style.top="0"
warp.style.left="0"
warp.style.width="100%"
warp.style.height="100%"
warp.style.background="black"
warp.style.zIndex="9999"

document.body.appendChild(warp)

let c=document.createElement("canvas")
c.width=window.innerWidth
c.height=window.innerHeight
warp.appendChild(c)

let ctx2=c.getContext("2d")

let stars=[]

for(let i=0;i<400;i++){
stars.push({
x:Math.random()*c.width,
y:Math.random()*c.height,
z:Math.random()*c.width
})
}

function animate(){
ctx2.fillStyle="black"
ctx2.fillRect(0,0,c.width,c.height)

for(let s of stars){

s.z-=15
if(s.z<=0) s.z=c.width

let k=128/s.z
let px=s.x*k+c.width/2
let py=s.y*k+c.height/2

ctx2.fillStyle="white"
ctx2.fillRect(px,py,2,2)

}

requestAnimationFrame(animate)
}

animate()

setTimeout(()=>{
window.location="space.html"
},2000)

}
