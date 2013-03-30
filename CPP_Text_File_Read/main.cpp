//
//  main.cpp
//  Read a Text File
//

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main(){
	ifstream file;
	file.open("text.txt"); 
	if(file.fail()){
		cerr << "Could not read file.";
		exit(1); // Exit or bad things will happen
	}

	while(true){
		string line;
		getline(file, line);
			if(file.fail()) // end of the text file
				break;
		cout << line << endl;
	}
	// system("PAUSE"); // required if your using visual studio
	return 0;
}
