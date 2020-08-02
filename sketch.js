
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3;
var paper;
var launcher1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
  
	if(keyDown("UP ARROW")){
		paper.x = 500;
		paper.y = 640;
	}
   
   box1 = new Box(710,610,200,20);
   box2 = new Box(710,520,20,100);
   box3 = new Box(890,520,20,100);

   paper = new Paper(100,300,70);

   launcher1 = new Launcher(paper.body,{x:200,y:300});

   ground = Bodies.rectangle(width/2, 670, width, 20 , {isStatic:true} );
  	 
   World.add(world, ground);
	 


	 Engine.run(engine);
  
}


function draw() {
  background(255);
  box1.display();
  box2.display(); 
  box3.display();
  paper.display();
  launcher1.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,20);
}
//function keyPressed(){
//	if(keyCode === UP_ARROW){
 // Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10})
//	}
//}

function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});   
}

function mouseReleased(){
  launcher1.fly()
}

