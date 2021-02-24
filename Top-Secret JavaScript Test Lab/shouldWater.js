// .slice() returns a list of CLI from the 2nd value onwards
const CLI = process.argv.slice(2);

const firstNum = Number(CLI[0]);
const secondNum = Number(CLI[1]);

// && means AND logical operator, similar to "and" in python
// || means OR logical operator, similar to "or" in python
if (firstNum === 0 && secondNum > 10) {
    console.log("WATER"); 
}