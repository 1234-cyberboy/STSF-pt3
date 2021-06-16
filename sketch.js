
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var fish, eel, present, starfish, shark, score, health;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	fish = new Fish();
	shark = new Shark();
	starfish = new Starfish();
	eel = new Eel();
	present = new Present(100, 350); 
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  drawSprites();

 
  fish.display();;
  eel.display();
  starfish.display();
  shark.display();
	present.display();


 
}



