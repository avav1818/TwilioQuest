const CLI = process.argv[2];
const statusId = Number(CLI);

if (statusId == 0) {
    console.log("alive");
} else if (statusId == 1) {
    console.log("flowering");
} else if (statusId == 2) {
    console.log("shedding");
} else {
    console.log("other");
}