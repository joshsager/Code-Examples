PImage img;

void setup(){
  size(400,400);
  img = loadImage("img.png");
  image(img,0,0);
  for(int x=0; x<400; x+=10){
    for(int y=0; y<400; y+=10){
      if(img.get(x,y)== -1){
        println(img.get(x,y) + " I found a match");
      };
    }
  }
}

void draw(){
  
}
