// JavaScript Document

var adobe = new Array();

adobe[0]="Flash";
adobe[1]="After Effects";
adobe[2]="Photoshop";
adobe[3]="Dreamweaver";
adobe[4]="Illustrator";
adobe[5]="Flex";
adobe[6]="In Design";
adobe[7]="Fireworks";
adobe[8]="Audition";
adobe[9]="Sound Booth";

onload = init;

function init(){
	outputArray();  
}

function outputArray(){
	var result ="<h1>Adobe Products</h1><ul>"
	
	for(i=0;i<adobe.length;i++){
		result+="<li>"+adobe[i]+"</li>";
	}
	result +="</li>";
	document.getElementById('content').innerHTML=result;
}








