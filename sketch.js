const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var world, engine;



var monkey,boy, fruit1,fruit2;
var basket;
var ground;

function preload(){
//background = loadImage()
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
ground=new Ground(600,height,1200,20);
mango=new Mango (20,20,20,20);
apple=new Apple (60,20,20,20);
boy = new Boy (20,200,20,50);
monkey = new Monkey(40,200, 20, 40)

}

function draw() {
  background(0);  
  engine.run;
  engine.updateengine;

ground.display()
mango.display()
apple.display()
boy.display()
monkey.display()

  
}