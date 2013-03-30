class Circle{
  float oX = 0;
  float oY = 0;
  float targetX = 0;
  float targetY = 0;
  float x = 0;
  float y = 0;
  float radius = 30; 
 Circle(float  xp, float yp){
  x = oX = xp;
  y = oY = yp;
  targetX = x;
  targetY = y; 
  smooth();
  noStroke();
  ellipse(x,y,radius,radius);
 }
  void update(float xp,float yp, int easing){
   x = xp;
   y = yp;
   fill(255);
   if(easing==1)
     x += (targetX - x) *.1;
   
     ellipse(x,y,radius,radius);
  } 
}
