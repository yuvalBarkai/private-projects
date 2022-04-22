let input=document.getElementById("input");
let stoped=document.getElementById("stop");
const myCanvas=document.getElementById("myCanvas");
const canvas=myCanvas.getContext("2d");

const width=myCanvas.width;
const height=myCanvas.height;
let x;
let y;
let r;
let go=false;
let interval;

let timeout = 100;
canvas.lineWidth = 3;


function submition(){
    timeout=Number(input.value)*1000;
    stoping();
    drawing();
}

function clearBtn(){
    canvas.fillStyle="white";
    canvas.fillRect(0,0,width,height);
}

function drawing(){
    if(!go){
        interval = setInterval(()=>{
            if(Math.random()<0.5){
            randomCircles();
            } else randomRects();
        },timeout)
        go=true;
        stoped.disabled=false;
    }
}
function stoping(){
    clearInterval(interval);
    go=false;    
    stoped.disabled=true;
}

function rand(limit){
    return Math.floor(Math.random()*limit+1);
}

function randomRects(){
    let kosherRect = false;
    while (!kosherRect) {
        x = rand(width);
        y = rand(height);
        w = rand(width);
        h = rand(height);
        if (x + w < width && y + h < height)
            kosherRect = true;
    }
    canvas.strokeStyle = "green";
    canvas.beginPath();
    canvas.strokeRect(x, y, w, h);
}

function randomCircles(){
    let kosherCirc=false;
    while(!kosherCirc){
        x=rand(width);
        y=rand(height);
        r=rand(100);
        if((x+r)<width && (y+r)<height && (x-r)>0 && (y-r)>0)
            kosherCirc=true;
    }
    canvas.beginPath();
    canvas.strokeStyle = "purple";
    canvas.arc(x,y,r,0,2*Math.PI);
    canvas.stroke();
}