
float powerupX;
float powerupY;
float enemyX;
float enemyY;
int score;
String gameState;

void setup(){
  size(800,600);
  background(0);
  smooth();
  score = 0;
  gameState = "start";
  enemyX = 500;
  enemyY = 500;
}

void draw(){
 if(gameState != "gameover"){ 
 // HERO CREATION 
 fill(255); // WHITE
 ellipse(mouseX,mouseY,50,50); 
 
 // TRACER EFFECT
 fill(0,0,0,30);
 rect(0,0,800,600);
 
 // POWER UP CREATION
 fill(0,255,0); // GREEEEEEEEEEN!!!!!!!
 ellipse(powerupX,powerupY,50,50);
 
 // HIT TEST
 if(dist(mouseX,mouseY,powerupX,powerupY) < 50){
  spawnPowerup(); 
  score++;
 }
 
 // SCORE
 fill(255); // WHITE
 text("Score: " + score,50,100);
 
 // ENEMY
 fill(255,0,0); // RED
 ellipse(enemyX,enemyY,50,50);
 
 // EASING
 enemyX += (mouseX - enemyX) *.02;
 enemyY += (mouseY - enemyY) *.02;
 
 // HIT TEST HERO TO ENEMY
 if(dist(mouseX,mouseY,enemyX,enemyY) < 50){
  gameState = "gameover";
  fill(0);
  rect(0,0,800,600); 
 }
 }
}

void spawnPowerup(){
  powerupX = random(width);
  powerupY = random(height);
}
