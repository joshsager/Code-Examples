onload = init;


function init(){
	loadxml();
	
}

function loadxml(){
  if(window.XMLHttpRequest){
xhttp= new XMLHttpRequest()  
  }else{
xhttp=new ActiveXObject("Microsoft.XMLHTTP")  
  }
  xhttp.open("GET", "data.php", false);
  xhttp.send("");
  xmlDoc=xhttp.responseXML;    
  var message = "First Super Bowl winner is the ";
  message+=xmlDoc.getElementsByTagName("winningTeam")[0].childNodes[0].nodeValue;  
  document.getElementsByTagName('body')[0].innerHTML = message;
}