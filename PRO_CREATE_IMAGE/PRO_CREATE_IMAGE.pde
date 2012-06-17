void setup(){
 size(500,500); 
 fill(255,0,0);
 rect(0,0,100,100);
 copy(0,0,100,100,100,0,100,100); 
 
 PImage img = get();
 image(img,20,80);
 blend(img,0,0,width,height,0,0,width,height,MULTIPLY);


}
