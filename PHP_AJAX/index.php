<!DOCTYPE html>
<html>
<head>
<title>PHP AJAX Test</title>
<script>

onload = init;
	var http=false;
	
function init(){

	document.getElementById("J").onclick = function(){click('Jordan')};
	document.getElementById("S").onclick = function(){click('Shawn')};
	if(navigator.appName == "Microsoft Internet Explorer") {
 	   http = new ActiveXObject("Microsoft.XMLHTTP");
	} else {
  	  http = new XMLHttpRequest();
	}
}
	
	function click(name){
	console.log("Hi Jordan");
	http.open("GET", "ajax.php?name="+name, true);
	
	 http.onreadystatechange=function() {
    	  if(http.readyState == 4) {
             document.getElementById('product').innerHTML = http.responseText;
    	      }
      	   }
          http.send(null);
          }
	

</script>
</head>
<body>
<h1>PHP AJAX Test</h1>
<a id="J">Click to add Jordan</a>
<a id="S">Click to add Shawn</a>
<div id="product">asdf</div>
</body>
</html>