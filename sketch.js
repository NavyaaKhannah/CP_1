
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(500,480,1000,20);
  paper=new Paper(100,430,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
 // drawSprites();
 
}
/*function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x=85,y=-85})
	}*/

	



