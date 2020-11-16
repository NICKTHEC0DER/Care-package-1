var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var plateL, plateR, plateB
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	plateB = createSprite(400, 650, 200, 20)
	plateB.shapeColor = ("red");
	plateL = createSprite(500, 630, 20, 70)
	plateL.shapeColor = ("red");
	plateR = createSprite(300, 630, 20, 70)
    plateR.shapeColor = ("red");
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	plateB = createSprite(400, 650, 200, 20)
	plateB.shapeColor = ("red");
	plateL = createSprite(500, 630, 20, 70)
	plateL.shapeColor = ("red");
	plateR = createSprite(300, 630, 20, 70)
    plateR.shapeColor = ("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	plateB = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 World.add(world, plateB);


	Engine.run(engine);




	packageSprite = new Package(width/2, 80, 10,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
  packageSprite.display();

}

function keyPressed() {
 if (keyCode === 32) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	console.log(packageBody);
	
	
	Matter.Body.setStatic(packageBody, false);

  }
}



