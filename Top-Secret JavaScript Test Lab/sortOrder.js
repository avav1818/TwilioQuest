const firstInput = process.argv[2];
const secondInput = process.argv[3];

// Because cases don't matter when sorting, converting all input strings to lowercase 
const firstValue = firstInput.toLowerCase();
const secondValue = secondInput.toLowerCase();

// where the values are the same 
if (firstValue === secondValue) {
    console.log(0); 
// Where the first value comes after the second in alphabetical order 
} else if (firstValue > secondValue) {
    console.log(1);
} else {
    console.log(-1);
}