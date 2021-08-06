var sea, ship;
var seaimg, shipImg1;


function preload(){
  seaimg = loadImage("sea.png")
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea=createSprite(400,200);
  sea.addImage (seaimg);
  sea.velocityX = -5;
  sea.scale=0.3;

  sea=createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
 sea.velocityX=-3;


if(sea.x < 0){
  sea.x=sea.width/8;
}

  drawSprites();
}