const Engine =Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
//const Body =  Matter.Body;

var engine, world;
var ground1;
var pig1;
var box1,box2;
var log1;
var box3;
var box4,pig2;

function setup() {
 var canvas= createCanvas(1200,400);

  engine =Engine.create();
  world = engine.world;

  box1 = new box(700,350,50,50);
  box2 = new box(900,350,50,100);
  pig1 = new pig(750,350);
  ground1=new ground(600,400,1200,20);
  log1=new log(800,200,300,PI/2);
  box3 = new box(700,250,50,50);
  box4 = new box(900,250,50,50);
  pig2 = new pig(750,250);
}
function draw() {
  background('lightblue');
Engine.update(engine);
box1.display();
box2.display();
ground1.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
  drawSprites();
} 

