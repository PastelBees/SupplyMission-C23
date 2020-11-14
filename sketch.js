var helicopterIMG, helicopterSprite, packageSprite,packageIMG,side1Sprite,side2Sprite,side3Sprite;
var packageBody,ground, side1,side2,side3
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1Sprite=createSprite(width/2, height-50, 200,20);
	side1Sprite.shapeColor=color("red")

	side2Sprite=createSprite(305, height-90, 20,100);
	side2Sprite.shapeColor=color("red")

	side3Sprite=createSprite(495, height-90, 20,100);
	side3Sprite.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.3, isStatic:true});
	World.add(world, packageBody);


	side1 = Bodies.rectangle(width/2, height-65, 200, 20 , {isStatic:true} );
	World.add(world, side1);
	
	side2 = Bodies.rectangle(width/2, height-90, 0, 100 , {isStatic:true} );
	World.add(world, side2);

	side3 = Bodies.rectangle(width/2, height-90, 0, 100 , {isStatic:true} );
	World.add(world, side3);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  keyPressed()
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic (packageBody, false);
  }
}



