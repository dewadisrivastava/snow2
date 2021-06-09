const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var engine,world

var frost=[]
var frost2,frostImage
var snow1,boy,boyImage,sound,boy2

function preload(){
snow1=loadImage("snow1.jpg")
frostImage=loadImage("snow4.webp")
boyImage=loadImage("download.jpg")
sound=loadSound("sound.m4a")
boy2=loadImage("download.png")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
  
     

     boy=createSprite(500,360,20,20)
  boy.addImage("boy",boyImage)
  boy.scale=0.4
}

function draw() {
  background(snow1);  
Engine.update(engine)
  
 

if(keyDown("space")){
  boy.velocityY=-10
  boy.addImage("boy",boy2)
}

if(boy.y===310){
  boy.velocityY=10
}

if(boy.y>=390 && boy.velocityY===10){
  boy.velocityY=0
  boy.addImage("boy",boyImage)
}


drawSprites()
text("press space to jump",300,100)

if(frameCount%60===0){
  frost2=createSprite(400,10,10,10)
  frost2.addImage("frost",frostImage)
  frost2.scale=0.1
  frost2.velocityY=10
  frost2.x=Math.round(random(100,600))
  sound.play()
}

bg()
bg2()
}

async function bg(){
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON=await response.json()
var datetime=responseJSON.datetime
var hour=datetime.slice(11,13)

if(hour>=7 && hour<=24){
  snow1=loadImage("snow2.jpg")
}

}


async function bg2(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json()
  var datetime=responseJSON.datetime
  var hour=datetime.slice(11,13)
  
  if(hour>=7 && hour<=24){
    snow1=loadImage("snow3.jpg")
  }
  
  }


  

 