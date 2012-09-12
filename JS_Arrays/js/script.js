// JavaScript Document

// Basic Array
var beatlesAlbums = new Array();
beatlesAlbums[0]="With the Beatles";
beatlesAlbums[1]="Revolver";
beatlesAlbums[2]="Magical Mystery Tour";
beatlesAlbums[3]="Abby Road";
beatlesAlbums[4]="Rubber Soul";

// Associative Array

var summerMovies = new Array();
summerMovies["name"]="Up";
summerMovies["company"]="Pixar";
summerMovies["film"]="Animation";
summerMovies["director"]="Pete Docter";

// Mutidimensional Array

var games = new Array();
games[0]={name:"Call of Duty",type:"FPS"};
games[1]={name:"Tetris",type:"Puzzle"};
games[2]={name:"Madden",type:"Sports"};
games[3]={name:"WOW",type:"MMORPG"};
games[4]={name:"Farmville",type:"MMORPG"};

onload = init;

function init(){
	showAll();	
}
function showAll(){
	showBeatles()
	showMovie()
	showGame()
}

// OUTPUT METHODS
function showBeatles(){
	var result="<h1>Beatles Albums</h1><ul>"
	
	result+="<li>"+beatlesAlbums[0]+"</li>";
	result+="<li>"+beatlesAlbums[1]+"</li>";
	result+="<li>"+beatlesAlbums[2]+"</li>";
	result+="<li>"+beatlesAlbums[3]+"</li>";
	result+="<li>"+beatlesAlbums[4]+"</li>";
	result+="</ul>";
	document.getElementById('beatles').innerHTML = result;
	
}
function showGame(){
	var result="<h1>Video Games</h1><ul>"

	result+="<li>Name: "+games[0].name;
	result+=" Type: "+games[0].type+"</li>";
		
	result+="<li>Name: "+games[1].name;
	result+=" Type: "+games[1].type+"</li>";

	result+="<li>Name: "+games[2].name;
	result+=" Type: "+games[2].type+"</li>";

	result+="<li>Name: "+games[3].name;
	result+=" Type: "+games[3].type+"</li>";

	result+="<li>Name: "+games[4].name;
	result+=" Type: "+games[4].type+"</li>";
	
	document.getElementById('videogames').innerHTML = result;

}
function showMovie(){
	var result="<h1>Pixar Movies</h1><ul>"

	result+="<li>"+summerMovies.name+"</li>";
	result+="<li>"+summerMovies.company+"</li>";
	result+="<li>"+summerMovies.film+"</li>";
	result+="<li>"+summerMovies.director+"</li>";
	
	document.getElementById('movies').innerHTML =result;
}





