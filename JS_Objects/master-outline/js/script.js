onload = init;

function init(){

}

/*

Class-less, Prototype-oriented, or instanced-based Programming
JavaScript Object Oriented Programming

Object
Property
Class
Constructor
Instantiation
Method

Inheritance
Encapsulation
public and private
getters and setters
Abstraction
Polymorphism


// PUBLIC and // PRIVATE 
// INHERITANCE
// subClass.prototype = new SuperClass();
// instanceOfSubClass = new SubClass(); 

*/

// OBJECTS
// OBJECTS are a great way to associate properties with a term or object. 
// The alternatvie would be creating a new variable for every possiblity. This can get very messy.
// Properties are customizable pieces of information for each object
/*
// CREATE AN OBJECT WITH OBJECT INITALIZER-- COLON and COMMAS
var obj ={
	name:'josh',
	type:'programming'	
};
// CREATE AN OBJECT -- DOT SYNTAX AKA ASSOCIATIVE ARRAY
var obj = new Object();	
	obj.name = name
	obj.type = type

// OBJECTS are great but when our programs grow in complexity we need to be a little more efficient.
// There are lots of redundat commands required to create each new object.
// Lets look at something many people personalzie. A phone case

/* var mikeyPhone = {
	caseCover : false,
	caseColor : "none"
}
var patPhone ={
	caseCover : true,
	caseColor : "green"
}
var riversPhone = {
	caseCover : true,
	caseColor : "blue"
}
var scottPhone = {
	caseCover : true,
	caseColor : "red"
}

*/

// CLASSES
// Forget what you know about classes and CSS. This is a completely different idea.
// By creating a class we can create a blueprint for all of our objects to follow. 
// In order for the objects to follow the blueprint the objects must be instantiated.
// The instantiation happens through a constructor.
// Often time parameters are passed through the constructor and stored in object, or instance properties
// Common convention is that classes start with a capital letter.
/*
function PhoneCase(cover,color){
	this.caseCover = cover;
	this.caseColor = color;
}
var mikeyPhone = new PhoneCase(false,"none");
var patPhone = new PhoneCase(true,"green");
var riversPhone = new PhoneCase(true,"blue");
var scottPhone = new PhoneCase(true,"red");
*/

// ABSTRACTION
// Thinking broadly, or generally to take advantage of common characteristics and commands.
// Instead of creating a PhoneCase class, lets call it Phone
// This will allow multiple objects to take advantage of common function and properties.
// Focus only on the essentials.
// Think very simple.
// Do the same for not just the class name but also the property names

/*
function Phone(cover,color){
	this.cover = cover;
	this.color = color;
}
var mikeyPhone = new Phone(false,"none");
var patPhone = new Phone(true,"green");
var riversPhone = new Phone(true,"blue");
var scottPhone = new Phone(true,"red");
*/

// Now that we are a little more general we can add in funcationality

// METHODS
// Functions, recipes, or a group of insructions with the goal of a particular outcome
/*
function Phone(cover,color,number,name){
	this.cover = cover;
	this.color = color;
	this.number = number;
	this.name = name;

	this.makeCall = function(number,contact){
		console.log("Calling " + contact +" at " + number);
	}

}
var mikeyPhone = new Phone(false,"none","555-1234","Mikey");
var patPhone = new Phone(true,"green","555-4321","Pat");

mikeyPhone.makeCall(patPhone.number,patPhone.name)

*/

// OBJECTED OREIENTED PROGRAMMING - INSTANCE VARIABLES
// This approach makes it very easy to add features for all similar objects
// For example now we want to ensure calls can't be interrupted
// We will create a default variable known as an instance variable that will set on creation
// Objects can also be passed as parameters
/*
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
