ArrayList data;
int counter = 0;

void setup(){
  data = new ArrayList();
  
}

void draw(){
  
}

void mousePressed(){
 counter++;
 data.add(counter);
 println(data); 
}
