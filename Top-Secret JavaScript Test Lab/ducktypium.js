class Ducktypium {   
    // constructor takes single string argument: a crystal color 
    constructor(crystalColor) {

        // color that is input by the user 
        this.crystalColor = crystalColor;
        // instance variable storing this.crystalColor data
        this.color = this.crystalColor; 
        // permissable colors
        this.permissableColors = ["blue", "red", "yellow"];
        // property set as empty array
        this.calibrationSequence = [];

        // Error handling 
        try { 
            // If there input color is not in the permissableColors list, throw an error, notice the "!" 
            if (!this.permissableColors.includes(this.crystalColor)) {
                throw "Enter only permissable colors: red, yellow or blue."; 
                }
        // finally statement that executes code iregardless of what happens after an error has been thrown
        } finally {}
    }

    // The refract method that takes in one string argument, a color 
    refract(inputColor) {
        try {
            // If the inputString isn't a valid color, throw this error
            if (!this.permissableColors.includes(inputColor)) {
                throw "Enter only permissable colors: red, yellow or blue.";
            } 
        // The finally clause is often used when we start doing something and want to finalize it in any case of outcome.
        } finally {
            // Output the possible combination of colours 
            
            // Where the inputColor is the same as the constructors color 
            if (inputColor === this.crystalColor) {
                return this.crystalColor;
            } else if (inputColor === "red" && this.crystalColor === "blue") {
                console.log("purple");
            } else if (inputColor === "red" && this.crystalColor === "yellow") {
                console.log("orange");
            } else if (inputColor === "yellow" && this.crystalColor === "blue") {
                console.log("green");
            } else if (this.crystalColor === "red" && inputColor === "blue") {
                console.log("purple");
            } else if (this.crystalColor === "red" && inputColor === "yellow") {
                console.log("orange");
            } else if (this.crystalColor === "yellow" && inputColor === "blue") {
                console.log("green");
            } else {}
        }
    }
    
    // The calibrate method takes an array of numbers as input
    calibrate(inputArray) {
        // Sorting inputArray from smallest to largest and then multiplying each number by 3
        // Sort function treats numbers as strings, hence the funciton workaround
        // Tutorial: https://www.w3schools.com/js/js_array_sort.asp 
        let newArray = inputArray.map(item => item * 3).sort(function(a,b) {return a - b});
        
        // Assigning new array to the Ducktypium instance's calibrationSequence variable 
        this.calibrationSequence = newArray;
    }
}

// Video on error handling: https://bit.ly/2LjdMj0 
