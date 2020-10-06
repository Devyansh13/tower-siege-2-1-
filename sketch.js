
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;

var b1,b2,b3,b4,b5,b6,b7;
var block1,block2,block3,block4,block5;
var Ublock1,Ublock2,Ublock3;
var Upblock6;

var block6,block7,block8,block9,block10;
var Ublock4,Ublock5,Ublock6;
var UPblock7;

var polygon1,slingshot;
{
	
}

function setup() {
	createCanvas(1200,700);


  engine = Engine.create();
  
	world = engine.world;
    ground=new Ground(600,690,1200,40)
	stand1=new Ground(500,450,400,30);
  stand2=new Ground(1000,250,300,30)
  b1=new BaseClass4(350,350,50,50);
  b2=new BaseClass4(400,350,50,50);
  b3=new BaseClass4(450,350,50,50);
  b4=new BaseClass4(500,350,50,50);
  b5=new BaseClass4(550,350,50,50);
  b6=new BaseClass4(600,350,50,50);
  b7=new BaseClass4(650,350,50,50);
	block1=new BaseClass(400,300,50,50);
  block2=new BaseClass(450,300,50,50);
  block3=new BaseClass(500,300,50,50);
  block4=new BaseClass(550,300,50,50);
  block5=new BaseClass(600,300,50,50);
  Ublock1=new BaseClass2(450,250,50,50);
  Ublock2=new BaseClass2(500,250,50,50);
  Ublock3=new BaseClass2(550,250,50,50);
  Upblock6=new BaseClass3(500,200,50,50);

  block6=new BaseClass(1000,230,50,50);
  block7=new BaseClass(950,230,50,50);
  block8=new BaseClass(900,230,50,50);
  block9=new BaseClass(1050,230,50,50);
  block10=new BaseClass(1100,230,50,50);
  Ublock4=new BaseClass2(950,180,50,50);
  Ublock5=new BaseClass2(1000,180,50,50);
  Ublock6=new BaseClass2(1050,180,50,50);
  UPblock7=new BaseClass3(1000,130,50,50);
  
  polygon1=new Polygon(200,300,75);
  slingshot = new Rope({x:200, y:300},polygon1.body);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("aqua");
  ground.display();
  stand1.display();
  stand2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  Ublock1.display();
  Ublock2.display();
  Ublock3.display();
  Upblock6.display();

 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 Ublock4.display();
 Ublock5.display();
 Ublock6.display();
 UPblock7.display();
 polygon1.display();
 slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
  
      Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
 //if(bodyB=bodyB){
    slingshot.fly();
  //gameState = "launched";
 //}
}

function keyPressed(){
  if(keyCode === 32){
     //attach(polygon1.body);
  }
}

