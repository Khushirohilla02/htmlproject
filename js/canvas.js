const canvas=document.querySelector("#canvas")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
canvas.style.background="#ff8";
const context=canvas.getContext("2d");
addEventListener("click",function()
{
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
})
class Circle
{ 
    factorx=1;
    factory=1;
    counter=0;
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;

    }
    /*setCircle(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }*/
    draw()
    {
        context.beginPath();
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.stroke();
        context.fillText(this.counter,this.x,this.y);
        context.textAlign="center";
        context.font="22px";
        //context.fill();
        context.closePath();

    } 
    update()
    {
        
        if((this.y+this.radius)>=canvas.height)
        {
            this.factory=-1;
            this.counter++;
        }
        if ((this.y-this.radius)<=0)
        {
            this.factory=+1;
            this.counter++;
        }
        if((this.x+this.radius)>=canvas.width)
            {
                this.factorx=-1;
                this.counter++;
                
            }
        if ((this.x-this.radius)<=0)
                {
                    this.factorx=+1;
                    this.counter++;
                }
            
                this.x=this.x+this.factorx;
                this.y=this.y+this.factory;

       
        this.draw();
        this.x+=this.factorx;
        this.y+=this.factory;
        this.x=this.x+this.factorx;
        this.y=this.y+this.factory;
        
    }
 }
/*let c=new Circle();
c.setCircle(100,100,50,"red");
c.draw();
let c1=new Circle();
c1.setCircle(200,100,50,"green");
c1.draw();*/
/*let circles=[];
for(i=1;i<=10;i++)
{
    let c=new Circle(100+i*10,100,40,"red");
    circles.push(c);
}
for(i=0;i<10;i++)
    circles[i].draw();*/
/*let c=new Circle(100,100,50,"red");
c.draw();
c.update();
let c1=new Circle(300,100,50,"red");
c1.draw();*/
let circles=[];
for(i=1;i<=10;i++)
{
    x=parseInt(Math.random()*canvas.width-30);
    y=parseInt(Math.random()*canvas.height-30);
    c=new Circle(x,y,30,"red");
    circles.push(c);
}
function updateAnimation()
{
    requestAnimationFrame(updateAnimation);
    context.clearRect(0,0,canvas.width,canvas.height);
    //c.update();
    //c1.update();
    for(i=0;i<circles.length;i++)
    circles[i].update();
}
updateAnimation();

