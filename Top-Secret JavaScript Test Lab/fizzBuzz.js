// Input is one command line number
const CLI = process.argv[2];
// Typecasting to Number 
const number = Number(CLI);

// Modulo operator: %, the same as in python 
if (number % 3 ===0 && number % 5 ===0) {
    console.log("JavaScript");
} else if (number % 5 === 0) {
    console.log("Script");
} else if (number % 3 === 0) {
    console.log("Java");
} else {
    console.log(number);
}