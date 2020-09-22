var car,car1,car2,car3,car4,wall,wall1;
var speed,weight;

function preload()
{
  car1 = loadImage("car1.png");
  car2 = loadImage("car2.png");
  car3 = loadImage("car3.png");
  car4 = loadImage("car4.png");
  wall1 = loadImage("wall1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 

  speed = random(55,90);
  weight = random(400,1500);

   car = createSprite(50,height/2, 50, 50);
   car.scale = 0.35;
   car.addImage("care",car1);
   wall = createSprite(1500,height/2,60,height/2);
   wall.scale = 0.5;
  car.shapeColor = "white";
  wall.shapeColor = "pink";
   wall.addImage("care",wall1);
   car.velocityX = speed;
}

function draw() {
  background("black"); 
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
   car.velocityX = 0;
   var deformation = 0.5*weight*speed*speed/22509;
   if(deformation>180)
   {
     car.addImage("care",car4);
   }
   
   if(deformation<180 && deformation>100)
   {
     car.addImage("care",car3);
   }

   if(deformation<100)
   {
     car.addImage("care",car2);
   }
  }
  
  
  
  drawSprites();
}