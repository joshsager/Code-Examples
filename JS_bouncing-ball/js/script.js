onload = init;
var loopInt;
var y = 0;
var x = 0;
var speedy =15;

function init(){
	
	loopInt = setInterval(loop, 1000/30)
}

function loop(){

	var shape = document.getElementById("shape");
	speedy += 1.5;
	
	y+=speedy;
	
	shape.style.top = y +"px";
	//console.log(y);
	
	if(y>300){
		y=300;
		speedy*=-.9;	
	}
}