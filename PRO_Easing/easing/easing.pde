int radius = 20;
float x = 10;
int y=10;
float vel = 0.05;
int targetX = 100;


void setup(){
 size(400, 400); 
 smooth();
}

void draw(){
 background(0);
 x += (targetX-x)*vel;
 println(x);
 ellipse(x,y,radius, radius);
}
