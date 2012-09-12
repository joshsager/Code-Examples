// JavaScript Document

onload = init;
var bands;
var bandsArray = new Array();

function init(){
	loadXML();
	sortXML();
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

function sortXML(){
	for(i=0; i<bands.getElementsByTagName("name").length; i++){
		bandsArray[i] ={name:bands.getElementsByTagName("name")[i].childNodes[0].nodeValue,
						song:bands.getElementsByTagName("song")[i].childNodes[0].nodeValue};	
	}
}

function outputXML(){
	var message ="";
	for(i=0; i<bandsArray.length; i++){
		message += bandsArray[i].name +"<br />";
		message += bandsArray[i].song +"<br />";
	}
	
	document.getElementById('content').innerHTML = message;
}





