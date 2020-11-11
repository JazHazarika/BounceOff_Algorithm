var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.velocityY = 4;
  fixedRect.shapeColor = "pink";
  movingRect = createSprite(400,600,50,80);
  movingRect.velocityY = -4;
  movingRect.shapeColor = "pink";

}



function draw() {
  background("green");  

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.velocityX = movingRect.velocityX *(-1);
    fixedRect.velocityX = fixedRect.velocityX *(-1);
  }

  if ( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.velocityY = movingRect.velocityY *(-1);
    fixedRect.velocityY = fixedRect.velocityY *(-1);
  }




  drawSprites();
}