const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles=[];
var divisions=[];
var plinkos=[];
var divisionHeight=300;

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,480,20);
 for(var k=0; k<=width; k=k+80){
   divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   
 }
 for(var j=40; j<=width; j=j+50){
  plinkos.push( new Plinko(j,100));
   }
 for(var k=15; k<=width-10; k=k+50){
  plinkos.push( new Plinko(k,200));
   }
  for(var h=30; h<= width; h=h+50){
    plinkos.push(new Plinko(h, 300))
  }
}



function draw() {
  background('black');
  Engine.update(engine) ; 
  ground.display();
  for(var t=0; t<divisions.length; t++){
divisions[t].display();
  }
  for(var j=0; j< plinkos.length; j++){
    plinkos[j].display();
  }
  if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var s=0; s < particles.length; s++){
    particles[s].display();
  }
}