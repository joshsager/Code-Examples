/* 
	This is a lesson in a JavaScript approach to Object Oriented Programming 

	CLASSES
	Forget what you know about classes and CSS. This is a completely different idea.
	By creating a class we can create a blueprint for all of our objects to follow. 
	In order for the objects to follow the blueprint the objects must be instantiated.
	The instantiation happens through a constructor.
	Often time parameters are passed through the constructor and stored in object, or instance properties
	Common convention is that classes start with a capital letter.
*/


function PhoneCase(cover,color){ // PhoneCase is a Class and in this case the Constructor
	this.caseCover = cover; // this assigns the value as an instance variable accessible publicly
	this.caseColor = color;
}
var mikeyPhone = new PhoneCase(false,"none"); // the new keyword creates an instance of the PhoneCase Class evoking the Constructor
var patPhone = new PhoneCase(true,"green");
var riversPhone = new PhoneCase(true,"blue");
var scottPhone = new PhoneCase(true,"red");

/*
	Type mikeyPhone.caseColor in the console;
	Type riversPhone.caseCover in the console;
	create a new instance for your phone in the console
*/
