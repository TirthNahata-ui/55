const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  pig1= new Pig(810,350,50,50)
    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    log1=new Log(810,300,20,300, PI/2);
    ground=new Ground(600,height,1200,30);   
    pig2= new Pig(810,280,50,50)
    box3=new Box(700,280,70,70);   
    box4=new Box(920,280,70,70);
    log2=new Log(810,250,20,300, PI/2);
    box5=new Box(810,220,70,70);
    log3=new Log(730,160,20,150, PI/7);
    log4=new Log(890,160,20,150, -PI/7);
   bird1=new Bird(550,160,70,70)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display(); 
    log1.display()
    ground.display();
    box3.display();
    box4.display();
    pig2.display(); 
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird1.display();
}

