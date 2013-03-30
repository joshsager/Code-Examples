Circle c1, c2;

void setup(){
  size(400,400);
  c1 = new Circle(100,100);
  c2 = new Circle(mouseX,mouseY);
}

void draw(){
  // refreshing
  fill(0);
  rect(0,0,400,400);

  c1.update(c1.x,c1.y,1);
  
  //println(c1.x);
  
  c2.update(mouseX,mouseY,0);
//  print(c2.x);
  
 if((dist(c1.x,c1.y,c2.x,c2.y)<(c1.radius/2+c2.radius/2))){
  //println(dist(c1.x,c1.y,c2.x,c2.y) + " " + (c1.radius+c2.radius)); 
  println("hit");
  c1.targetX=c1.x+100;
 }else if(c1.targetX-c1.x< 1 ){
  c1.targetX=c1.oX;

 }
}
