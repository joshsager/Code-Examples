// STEPS TO CREATE A SHARED LIBRARY
# Compile both library files
gcc -c bert.o ernie.o

# Test compile the program
gcc -c main.c
gcc -o main main.c ernie.c
./main

# Create the library with Archive
ar crv libmuppets.a bert.o ernie.o

# Compile with the newly created static library file
gcc -o main main.o libmuppets.a
./main

# Compile via the Include path for the library
gcc -o main main.o -L. -lmuppets
