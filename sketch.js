var boy,boyImg;
var car,carImg;
var bg,backgroundImg
var carsGroup;

function preload(){
 boyImg=loadAnimation("b0.png","b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png","b9.png","b10.png","b11.png")
 backgroundImg=loadImage("background.png")
 carImg=loadImage("car.png")   
 
 
}

function setup(){
    createCanvas(600,400)
    bg=createSprite(300,200,600,400)
    bg.addImage("background",backgroundImg)
    bg.scale=0.4

    boy=createSprite(100,340)
    boy.addAnimation("boy",boyImg)
    boy.scale=0.2

   ground=createSprite(300,400,600,20)
  
    carsGroup=new Group()

} 

function draw(){
background(6)
bg.velocityX=-3
if (bg.x<=250){
    bg.x=bg.width/6
}

if(keyDown("space")&&boy.y>100){
    boy.velocityY = -10;
  }
  
  boy.velocityY = boy.velocityY + 0.5;

boy.collide(ground)
spawnCars()

drawSprites()


}

function spawnCars(){
  if (frameCount%200===0){
    car =createSprite(800,360)
    car.addImage(carImg)
    car.velocityX=-3
    car.lifetime=400
    carsGroup.add(car)
  }
}