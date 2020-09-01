var ball,img,paddle, r;
function preload() {
  /* preload your images here of the ball and the paddle */
  
  ball = loadImage("ball.png");
  paddle = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  paddle = createSprite(390,190,10,70);
  paddle.addAnimation("paddle.png");
  ball = createSprite(200,200,20,20);
  ball.addAnimation("ball.png");
  ball.velocityX = 9;
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  
 
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  if(ball.isTouching(paddle)){
   randomVelocity();
   }

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY = -3;
     
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 3;
  }
  drawSprites();
  
}

function randomVelocity()
{
   r = randomVelocityY(-3,3);
 
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

