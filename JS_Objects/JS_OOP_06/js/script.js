/* 
	This is a lesson in a JavaScript approach to Object Oriented Programming 

	OBJECTED OREIENTED PROGRAMMING - VARIABLES VS PARAMETERS
	This approach makes it very easy to add features for all similar objects
	For example now we want to ensure calls can't be interrupted
	We will create a default variable known as an instance variable that will set on creation
	Objects can also be passed as parameters
*/

function Phone(cover,color,number,name){
	this.cover = cover;
	this.color = color;
	this.number = number;
	this.name = name;
	this.inUse = false;
	this.phoneCaller;

	this.makeCall = function(phoneCaller){ // pass objects instead of lots of parameters
		// are the caller and the callee available?
		if(!this.inUse){
			this.inUse = true;
			console.log("Calling " + phoneCaller.name +" at " + phoneCaller.number);
		}else{
			console.log("busy signal...");
		}
	}

}
var mikeyPhone = new Phone(false,"none","555-1234","Mikey");
var patPhone = new Phone(true,"green","555-4321","Pat");
var riversPhone = new Phone(true,"green","555-5445","rivers");

/*
Type each of these commands into the console
// Mikey Calls Pat 
mikeyPhone.makeCall(patPhone);
// Rivers Calls Mikey
mikeyPhone.makeCall(riversPhone);

// Pretty neato huh?
It's not fail safe though. 
If rivers tries to call pat the call goes through but there should be a busy signal.
Same is true if rivers tries to call mikey. We need a way to track both uses of both phones.

Also these calls go on forever. We need a way to end the phone calls.
Please see the final code in the next section.

*/
