//
//  main.cpp
//  Create a Text File
//

#include <iostream>
#include <fstream>

using namespace std;

int main(){
	ofstream file("text.txt"); // file is the ofstream object reference

	if(file.fail()){
		cerr << "Could not create file.";
		exit(EXIT_FAILURE); // Exit or bad things will happen
	}

	file << "This is a text file" << endl;
	file << "Pretty awesome!" << endl;

	// system("PAUSE"); // required if your using visual studio
return 0;
}
