// JavaScript Document

onload = init;

function init(){
	loadXML();
	outputXML();
}

function loadXML(){
// CAN WE USE XML
	if(window.XMLHttpRequest){
	  xml = new XMLHttpRequest();
	}else{
	  xml = ActiveXObject("Microsoft.XMLHTTP")	
	}
	
	// LOAD XML
	xml.open("GET","data/bands.xml",false);
	xml.send("");
	// STORE XML
	bands = xml.responseXML;
}

function outputXML(){
	var message ="<ul>";
	for(i=0; i<bands.getElementsByTagName("name").length; i++){
		message += "<li>Artist: "+ bands.getElementsByTagName("name")[i].childNodes[0].nodeValue +"</li>";
		message += "<li>Song: "+ bands.getElementsByTagName("song")[i].childNodes[0].nodeValue +"</li>";
	}
	message += "</ul>";
	
	document.getElementById('content').innerHTML = message;
}





