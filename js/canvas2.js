const canvas=document.querySelector("#canvas")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
canvas.style.background="#ff8";
const context=canvas.getContext("2d");
class Circle
{  
    factorx=1;
    factory=1;
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;

    }
draw()
{
    context.beginPath();
    context.fillStyle=this.color;
    context.arc(this.x,this.y,this.radius,0,2*Math.PI);
    context.stroke();
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
       
    }
}
/*let c1=new Circle(200,200,40,"red");
c1.draw();
addEventListener("click",function(e)
{
    if(getDistance(e.x,e.y,c1.x,c1.y)<=40)
        c1.color="green";
    c1.draw();
})*/
function getDistance(x1,y1,x2,y2)
{
    let distance=Math.sqrt((Math.pow((x2-x1),2))+(Math.pow((y2-y1),2)));
    console.log(distance);
}
let c1=new Circle(300,300,100,"red");
c1.draw();
let c2=new Circle(100,100,40,"red");
c2.draw();
function updateAnimation()
{
    requestAnimationFrame(updateAnimation);
    context.clearRect(0,0,canvas.width,canvas.height);
    c2.update();
    c1.draw();
}
updateAnimation();