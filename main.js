function enterUniverse(){

let warp=document.createElement("div");

warp.style.position="fixed";
warp.style.top="0";
warp.style.left="0";
warp.style.width="100%";
warp.style.height="100%";
warp.style.background="black";
warp.style.zIndex="9999";
warp.style.color="white";
warp.style.display="flex";
warp.style.alignItems="center";
warp.style.justifyContent="center";
warp.style.fontSize="40px";

warp.innerHTML="Entering The Milky Way... 🌌";

document.body.appendChild(warp);

let stars=document.createElement("canvas");

stars.width=window.innerWidth;
stars.height=window.innerHeight;

warp.appendChild(stars);

let ctx=stars.getContext("2d");

let starArray=[];

for(let i=0;i<500;i++){

starArray.push({

x:Math.random()*stars.width,
y:Math.random()*stars.height,
z:Math.random()*stars.width

})

}

function animate(){

ctx.fillStyle="black";
ctx.fillRect(0,0,stars.width,stars.height);

for(let i=0;i<starArray.length;i++){

let s=starArray[i];

s.z-=10;

if(s.z<=0){

s.z=stars.width;

}

let k=128/s.z;

let px=s.x*k+stars.width/2;
let py=s.y*k+stars.height/2;

ctx.fillStyle="white";
ctx.fillRect(px,py,2,2);

}

requestAnimationFrame(animate);

}

animate();

setTimeout(()=>{

window.location="space.html";

},2500);

}
