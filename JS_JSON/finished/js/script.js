onload = init;

function init(){
	document.getElementsByTagName("body")[0].innerHTML = myJSONObject.muppets[0].muppet;
}

var myJSONObject = {"muppets": [
		{"muppet": "Kermit", "animal": "Frog", "limbs": {"num": "4", "arms":2,"legs":2}},
		{"muppet": "Mrs. Piggy", "animal": "Pig"},
		{"muppet": "Gonzo", "animal" : "Unknown"}
	]
}
