const canvas=document.querySelector("#canvas")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
canvas.style.background="#ffa";
const context=canvas.getContext("2d");
let x=100;
let y=100;
/*
context.fillStyle="green";
context.fillRect(100,100,50,50);
context.beginPath();
context.moveTo(10,10);
context.lineTo(150,150);
context.stroke();
context.closePath();*/
/*addEventListener("click",function()
{
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
})*/
/*addEventListener("mousemove",function()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
})*/
context.fillRect(100,100,60,60);
addEventListener("keydown",function(e)
{
    if(e.key=="ArrowRight")
    {
        x++;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.fillRect(x,100,60,60);
        context.stroke();
        context.closePath();
    }
})
addEventListener("keydown",function(e)
{
    if(e.key=="ArrowLeft")
    {
        x--;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.fillRect(x,100,60,60);
        context.stroke();
        context.closePath();
    }
})
addEventListener("keydown",function(e)
{
    if(e.key=="ArrowUp")
    {
        y--;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.fillRect(100,y,60,60);
        context.stroke();
        context.closePath();
    }
})
addEventListener("keydown",function(e)
{
    if(e.key=="ArrowDown")
    {
        y++;
        context.clearRect(0,0,canvas.width,canvas.height);
        context.beginPath();
        context.fillRect(100,y,60,60);
        context.stroke();
        context.closePath();
    }
})
