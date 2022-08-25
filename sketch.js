
var trex ,trex_running;
var ground, groundImg;

// preload function is used to load all the images and sound files before you use them in your code
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg=loadImage("ground2.png");

}
// things that you want to do only one time, you write it in setup function

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(100,150,30,80);
 trex.addAnimation("trexwalking",trex_running);
 trex.scale=0.6;


 ground=createSprite(300,180,600,20);
 ground.addImage("groundimage",groundImg);
}

// things that you wish to do in each frame continuously
function draw(){
  background("yellow");

  //making the trex jump on the press of space key
  if(keyDown("space")){
   
   trex.velocityY=-10;
  }

  // adding gravity to bring the trex back on the ground
  trex.velocityY=trex.velocityY+0.9;

  //preventing trex from falling off the ground
  trex.collide(ground);

drawSprites();
  

}
