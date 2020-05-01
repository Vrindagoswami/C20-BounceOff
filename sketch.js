var rect1;
var rect2;
var rect3;
var rect4;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100,100,60,80);
  rect1.shapeColor = "green";
  rect1.velocityX = 3;
  rect2 = createSprite(700,100,60,80);
  rect2.shapeColor = "red";
  rect2.velocityX = -4;
  rect3 = createSprite(200,300,60,80);
  rect3.shapeColor = "purple";
  rect3.velocityY = -3;
  rect4 = createSprite(200,100,60,80);
  rect4.shapeColor = "blue";
  rect4.velocityY = 3;
}

function draw() {
  background(0,0,0);  
  BounceOff(rect1,rect2);
  BounceOff(rect3,rect4);
  drawSprites();
}

function BounceOff(object1,object2){
if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
  object2.x - object1.x < object2.width/2 + object1.width/2)
  {
object1.velocityX = object1.velocityX * (-1);
object2.velocityX = object2.velocityX * (-1);
}
if(object1.y - object2.y < object1.height/2 + object2.height/2 && 
  object2.y - object1.y < object2.height/2 + object1.height/2)
  {
object1.velocityY = object1.velocityY * (-1);
object2.velocityY = object2.velocityY * (-1);
  }


}