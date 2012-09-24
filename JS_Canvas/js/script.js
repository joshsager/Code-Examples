onload = init;

var canvas
var context
var c
var speedy = 2;
var y = 100;

	
function init(){
	createCanvas();
	loopInt = setInterval(loop, 1000/60)
}

function createCanvas(){
	canvas = document.createElement( 'canvas' ),
	context = canvas.getContext( '2d' );
	canvas.width = 800; 
	canvas.height = 600; 
	document.body.appendChild(canvas);
	
	c = context; 
	
}
function updateCircle(){
	c.clearRect(0,0,800,600);
	c.fillStyle = 'rgb(255,0,0)';
	c.beginPath(); 
	c.arc(100,y,25,0,Math.PI*2,true); 
	c.fill(); 
}

function loop(){
	speedy+=0.5;
	y+=speedy;
	
	if(y>300){
		y=300;
		speedy*=-.9;
	}
	updateCircle();
	}