const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
let ground;
let wedge;
let angle = 60;
let poly;
let boxes = [];

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  };
  
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function mousePressed() {
  var box = new Box(mouseX, mouseY, 50, 50);
  boxes.push(box);
}

function draw() {
  background(51);
  
  rect(ground.position.x, ground.position.y, 400, 10);
  
  Engine.update(engine);
  
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}

class Box {
  constructor(x, y, w, h) {
    var options = {
      friction: 0.5,
      restitution: 0.5
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  
  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

