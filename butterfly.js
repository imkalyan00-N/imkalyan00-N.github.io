const canvas=document.getElementById("butterflyCanvas")

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let butterflies=[]

for(let i=0;i<25;i++){

butterflies.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

speed:1+Math.random()*2

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.font="26px serif"

butterflies.forEach(b=>{

ctx.fillText("🦋",b.x,b.y)

b.y-=b.speed

if(b.y<0){

b.y=canvas.height
b.x=Math.random()*canvas.width

}

})

requestAnimationFrame(draw)

}

draw()
