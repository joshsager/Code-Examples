/* 
	This is a lesson in a JavaScript approach to Object Oriented Programming 

	ABSTRACTION
	Thinking broadly, or generally to take advantage of common characteristics and commands.
	Instead of creating a PhoneCase class, lets call it Phone
	This will allow multiple objects to take advantage of common function and properties.
	Focus only on the essentials.
	Think very simple.
	Do the same for not just the class name but also the property names

*/
function Phone(cover,color){ // Phone instead of PhoneCase
	this.cover = cover; // cover insead of phoneCover 
	this.color = color; // color instead of phoneColor
}
var mikeyPhone = new Phone(false,"none");
var patPhone = new Phone(true,"green");
var riversPhone = new Phone(true,"blue");
var scottPhone = new Phone(true,"red");

/*
	Type mikeyPhone.color in the console;
	Type riversPhone.cover in the console;
	create a new instance for your phone in the console.
	Output the properties in the console.
*/
