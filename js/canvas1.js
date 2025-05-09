const canvas=document.querySelector("#canvas")
canvas.width=window.innerWidth;
canvas.height=400;
canvas.style.background="#ff8";
const context=canvas.getContext("2d");
class Circle
{  
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
        context.fill();
        context.closePath();
    }
}

let c=new Circle(100,100,50,"red");
//c.setCircle();
c.draw();
let c1=new Circle(200,100,50,"green");
//c1.setCircle();
c1.draw();
let c2=new Circle(300,100,50,"blue");
//c2.setCircle();
c2.draw();
