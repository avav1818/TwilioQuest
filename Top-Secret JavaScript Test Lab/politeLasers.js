const state1 = "OFF", state2 = "ON";

// Use "function" to create a function 
function getLaserSetting(inputString) {    
    // Conditional that returns a state based on the inputString
    if (inputString == "please") {
        return state1;
    } else {
        return state2; 
    }
}