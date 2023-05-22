const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var left, right, ground, top_wall;

var ball;

var b1, b2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ground = new Ground (200, 390, 400, 20);
  left = new Ground (10, 200, 20, 400);
  right = new Ground (390, 200, 20, 400);
  top_wall = new Ground (200, 10, 400, 20);

  ball_options = {
    restitution : 0.09
  }

  ball = Bodies.circle (200,100,20,ball_options);
  World.add (world, ball);

  b1 = createImg ('right.png')
  b1.position (220, 30);
  b1.size (50,50)
  b1.mouseClicked (hforce)

  b2 = createImg ('up.png')
  b2.position (20, 30);
  b2.size (50,50)
  b2.mouseClicked (vforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);

  ground.show ()
  left.show ();
  right.show ();
  top_wall.show ();

  ellipse (ball.position.x, ball.position.y, 20)
  Engine.update(engine);
}

function hforce () {
  Matter.Body.applyForce (ball, {x:0, y:0}, {x:0.05, y:0})
}

function vforce () {
  Matter.Body.applyForce (ball, {x:0, y:0}, {x:0, y:-0.05})
}

