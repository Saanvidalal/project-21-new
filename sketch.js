
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload() {

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Bodies.circle(100, 200, 20, ball_options);
	groundObj = new Ground(width / 2, 670, width, 20);
	leftSide = new Ground(800, 600, 20, 120);
	rightside = new Ground(1100, 600, 20, 120)
	World.add(world, ball)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS)
	background(0);
	fill("white");
	ellipse(ball.position.x, ball.position.y, 20)
	
	groundObj.display();
  leftSide.display()
  rightside.display()

	drawSprites();

}
function keyPressed (){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:80,y:-80})	
	}
}



