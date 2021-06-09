class Frost2{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'density':2.0,
            'friction':1.0
        }
   
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("snow5.webp")
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
   
    display(){
        var pos=this.body.position
        var angle=this.body.angle
       push ();
       translate(pos.x,pos.y)
       rotate(angle)
       image(this.image,0,0,this.width,this.height)
       pop()
    }
   }