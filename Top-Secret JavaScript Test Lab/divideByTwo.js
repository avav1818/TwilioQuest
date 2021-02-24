/* Data input in the command line: arguments
Example CLI:    
    node someProgram.js "argument one" "another argument" allOneWordNoQuotes
 Accessed in a list called "process.argv"
*/ 

const inputValue = process.argv[2];

// Typecasting by converting string @inputValue to a Number()
const numberValue = Number(inputValue);

// Using "/" to divide the @numberValue
const divBy2 = numberValue / 2;

// Printing results 
console.log(divBy2); 