var score;

var space,spaceimg;
var alien,alienw,alienc,alienimg;
var alien2,alienw2,alienc2,alien2img;
var alien3,alienw3,alienc3,alien3img;
var stone,stoneimg;
var meteor,meteorimg;
var stone2,stone2img;
var stonesgroup;
var stones2group;
var stones3group;
var stones4group;
var meteorgroup;
var meteor2group;
var peoplegroup;
var people2group;
var people3group;
var doorimg;
var climberimg;
var dooor2img;
var dooor3img;
var gameoverimg,gameover;

var burst;

var gameState = "play";

function preload(){
spaceimg=loadImage("bspace.png");
  
alien2img= loadAnimation("alien2 (1).png")
alien3img=loadAnimation("alien3 (1).png")
 
alienw2=loadAnimation("alien2 (2).png","alien2 (3).png")
alienw3=loadAnimation("alien3 (2).png","alien3 (3).png")

stoneimg=loadImage("sprite_0.png")
stone2img=loadImage("metero_0.png")
meteorimg=loadImage("flight_0-1.png")
doorimg=loadImage("sprite_0 (2).png")
climberimg=loadImage("jet.png")  
door2img=loadImage("ping.png");
door3img=loadImage("pong.png")
burst=loadImage("brust_0.png")
gameoverimg=loadImage("gameover_0.png")
}

function setup() {
createCanvas(1000, 400);

space=createSprite(0,500,1000,500)
space.addImage(spaceimg)
space.scale=17;
  
alien=createSprite(50,340,100,100);
alien.addAnimation("walking",alienw2)
alien.addAnimation("collided",alien2img)  
alien.scale=0.14
  
gameover=createSprite(500,500,1000,1000)  
gameover.addImage(gameoverimg)

stonesgroup= createGroup();
stones2group = createGroup() ;
stones3group = createGroup() ;
stones4group = createGroup() ;
stones5group = createGroup() ;  
meteorgroup=createGroup();
meteor2group=createGroup();
peoplegroup=createGroup();
people2group=createGroup();
people3group=createGroup();

  
score=0
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text("score: "+ score, 100,50);
  
  if(people2group.isTouching(alien)){
      people2group.destroyEach();
    score = score + 20;
    }
  
  if(peoplegroup.isTouching(alien)){
      peoplegroup.destroyEach();
    score = score + 10;
    }
  
  if(people3group.isTouching(alien)){
      people3group.destroyEach();
    score = score + 50;
    }
  
  if(gameState === "play"){ 
    gameover.visible = false;
  space.velocityX =-6 

if (space.x < 0){
      space.x = space.width/2;
}
  
if(keyDown(UP_ARROW)){
 alien.y=alien.y-5;
 
}
  if(keyDown(DOWN_ARROW)){
 alien.y=alien.y+5;
    
    
  
 
}
  
 if(stonesgroup.isTouching(alien)) {
  //stonesgroup.destroyEach();
   stonesgroup. setVelocityXEach(0)
   peoplegroup.setVelocityXEach(0)
   meteorgroup.setVelocityXEach(0)
   space.velocityX=0
   alien.changeAnimation("collided",alien2img)
   
   gameState = "end"
   
 }
    
 if(meteorgroup.isTouching(alien))   {
   stonesgroup. setVelocityXEach(0)
   peoplegroup.setVelocityXEach(0)
   meteorgroup.setVelocityXEach(0)
   space.velocityX=0
   alien.changeAnimation("collided",alien2img)
   gameState = "end"
   
 }
  if (gameState === "end"){
    
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 500,500);
   
    
  }


spawnstones()
spawnstones2()
spawnstones3()
spawnstones5()
spawnmeteor()
spawnmeteor2()
spawnpeople()
spawnpeople2()
spawnpeople3()
  }
drawSprites();
  
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+ score, 100,50);
  
} 
  

function spawnstones(){
  if (frameCount % 110 === 0){
   var stones = createSprite(1000,80,10,40);
   stones.velocityX = -10;
   
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: stones.addImage(stoneimg);
              break;
     // case 2: stones.addImage(stone2img);
             // break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    stones.scale = 0.7;
    stones.lifetime = -1;
   
   //add each obstacle to the group
    stonesgroup.add(stones);
 }
}

function spawnstones2(){
  if (frameCount % 150 === 0){
   var stones = createSprite(1000,250,10,40);
   stones.velocityX = -20;
   
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: stones.addImage(stoneimg);
              break;
     // case 2: stones.addImage(stone2img);
             // break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    stones.scale = 0.7;
    stones.lifetime = -1;
   
   //add each obstacle to the group
    stonesgroup.add(stones);
 }
}


 function spawnstones3(){
  if (frameCount % 150 === 0){
   var stones = createSprite(1000,40,350,40);
   stones.velocityX = -30;
   
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: stones.addImage(stoneimg);
              break;
     // case 2: stones.addImage(stone2img);
             // break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    stones.scale = 0.7;
    stones.lifetime = -1;
   
   //add each obstacle to the group
    stonesgroup.add(stones);
 }
}



function spawnstones5(){
  if (frameCount % 400 === 0){
   var stones = createSprite(1000,350,10,40);
   stones.velocityX = -25 ;
   
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: stones.addImage(stone2img);
              break;
     // case 2: stones.addImage(stone2img);
             // break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    stones.scale = 0.7;
    stones.lifetime = -1;
   
   //add each obstacle to the group
    stonesgroup.add(stones);
 }
}

function spawnmeteor(){
  if (frameCount % 450 === 0){
   var meteor = createSprite(1000,200,10,40);
   meteor.velocityX = -15 ;
   
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: meteor.addImage(meteorimg);
              break;
     // case 2: stones.addImage(stone2img);
             // break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    meteor.scale = 0.2;
    meteor.lifetime = -1;
   
   //add each obstacle to the group
    meteorgroup.add(meteor);
 }
}


function spawnmeteor2(){
  if (frameCount % 250 === 0){
   var meteor = createSprite(1000,300,10,40);
   meteor.velocityX = -15 ;
   
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: meteor.addImage(meteorimg);
              break;
     // case 2: stones.addImage(stone2img);
             // break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    meteor.scale = 0.2;
    meteor.lifetime = 200;
   
   //add each obstacle to the group
    meteorgroup.add(meteor);
 }
}


function spawnpeople(){
if (frameCount % 250 === 0) {

  var climber1 = createSprite(1000,50,10,40);
  
  climber1.x = Math.round(random(120,400));
  climber1.addImage(climberimg)
  climber1.scale=0.1
  climber1.velocityX = -5; 
  
  peoplegroup.add(climber1)
    
}
}

function spawnpeople2(){
if (frameCount % 100 === 0) {
    
  var climber2 = createSprite(1000,100,10,40);
  
  
  climber2.x = Math.round(random(120,400));
  climber2.addImage(door3img)
  climber2.scale=0.1
  climber2.velocityX = -5; 
    
 people2group.add(climber2)
    
}
}
function spawnpeople3(){
if (frameCount % 580 === 0) {
    var door = createSprite(1000,300,10,40);
    
  
    door.x = Math.round(random(200,500));
    door.addImage(door2img)
    door.scale=0.2
    door. velocityX = -5 
  
 
    people3group.add(door)
  
    
}
}