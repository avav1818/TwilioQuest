// CLI = command line input
const argValue = process.argv[2];
const lifeStatus = Number(argValue); 

if (lifeStatus == 0) {
    console.log("alive");
} else {
    console.log("other");
}