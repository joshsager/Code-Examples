onload = init;
var loopInt;
var y = 0;
var x = 0;
var mouseX=0;
var mouseY=0;

function init(){
	
	loopInt = setInterval(loop, 1000/30);
	document.onmousemove = function(event){getMousePosition(event); }
}

function loop(){
	
	var shape = document.getElementById("shape");

	y+= (mouseY - y) * .3;
	x+= (mouseX - x) * .3;
	
	shape.style.top = y +"px";
	shape.style.left = x +"px";
	
}
		
	function MouseEvent(e){
	    if(e){
	    	this.e = e;
	    }else{
	    	this.e = window.event;
	    }
	    if(e.pageX){
	    	this.x =e.pageX;
	    }else{
	    	this.x=e.clientX;
	    }
	    if(e.pageY){
	    	this.y=e.pageY;
	    }else{
	    	this.y=e.clientY;
	    }
	    if(e.target){
	    	this.target = e.target;
	    }else{
	    	this.target = e.srcElement;
	    }
	    
	}
	
	
	function getMousePosition(evt){
	    var e = new MouseEvent(evt);
	    mouseX = e.x;
	    mouseY = e.y
	}
	