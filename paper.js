class Paper{
    constructor(x,y,radius){
    var options={
      restitution:0.8,
      friction:0.3,
      density:1.2
    }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;
     this.pap = loadImage('paper.png')
     
     World.add(world,this.body);
  } 
     display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("green");
       image(this.pap,pos.x, pos.y, this.radius+20,this.radius+20);
      

     }
}