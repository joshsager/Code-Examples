/* 
	This is a lesson in a JavaScript approach to Object Oriented Programming 

	Now that we are a little more general we can add in funcationality

	METHODS
	Functions, recipes, or a group of insructions with the goal of a particular outcome
*/

function Phone(cover,color,number,name){
	this.cover = cover;
	this.color = color;
	this.number = number; // a phone number property has been added
	this.name = name; // owner name of the phone property has been added

	/** Calls the number passed in and stores the name of the person called
	* @param number 		accepts the phone number to be called	
	* @param contact		accepts the name of the person called
	*/
	this.makeCall = function(number,contact){
		console.log("Calling " + contact +" at " + number);
	}

}
var mikeyPhone = new Phone(false,"none","555-1234","Mikey");
var patPhone = new Phone(true,"green","555-4321","Pat");


/*
	Type mikeyPhone.makeCall(patPhone.number,patPhone.name); into the console;
	Now call pat.

	Create your phone and your neighbors phone. 
	Call each other.
	
*/
