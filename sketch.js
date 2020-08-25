var fixedRect, movingRect,movingRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect2 = createSprite(400, 600,50,30);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;



  movingRect2.velocityY = -5;
  fixedRect.velocityY = +5;
  
}







function draw() {
  background(0,0,0);  

  bounceOff(movingRect2,fixedRect);

  drawSprites();
}
