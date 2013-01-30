/* 
	This is a lesson in a JavaScript approach to Object Oriented Programming 

	Final Code
	Here we have added a hang up feature and we capture each of the phones useage
*/

function Phone(cover,color,number,name){
	this.cover = cover;
	this.color = color;
	this.number = number;
	this.name = name;
	this.inUse = false;
	this.phoneCaller;

	this.makeCall = function(phoneCaller){
		// are the caller and the callee available?
		if(!this.inUse && !phoneCaller.inUse){
			this.inUse = true; // set callee phone in use
			phoneCaller.inUse = true; // set caller phone in use
			this.phoneCaller = phoneCaller; // store the callers information
			phoneCaller.phoneCaller = this; // send the callee information to the caller

			console.log("Calling " + phoneCaller.name +" at " + phoneCaller.number);
		}else{
			console.log("busy signal...");
		}
	}

	this.hangUp = function(){
		// is the phone in use
		if(this.inUse){
			this.inUse = false; // set callee to no longer be in use
			this.phoneCaller.inUse = false;  // set caller to no longer be in use
			console.log("Call with "+this.phoneCaller.name + " has ended");
			this.phoneCaller = null; // remove caller information
		}else{
			console.log("Hey silly... you can't hang up a phone that's not in use.");
		}
	}

}
var mikeyPhone = new Phone(false,"none","555-1234","Mikey");
var patPhone = new Phone(true,"green","555-4321","Pat");
var riversPhone = new Phone(true,"green","555-5445","rivers");
/*

Try the following

	// Mikey Calls Pat 
	mikeyPhone.makeCall(patPhone);
	// Rivers Calls Pat
	riversPhone.makeCall(PatPhone);
	// Pat Hangs Up
	patPhone.hangUp();
	// Pat Hangs Up Again
	patPhone.hangUp();
	// Mikey hangs Up
	mikeyPhone.hangUp();
	// Rivers Calls Pat Again
	riversPhone.makeCall(PatPhone);

Create new phone instances for up to 3 people and try to make calls

*/
// This has been an example creating funcationality for all objects without having to rewrite code.
// Each instance gets all of the methods and properties of the class

// REVIEW
/*
Object
Property
Class
Constructor
Parameters
Abstraction
Instantiation
Method
*/
