// input is an array of numbers 
function calculatePower(nArray) {
    // return the sum of numbers in the input array once they have all been multiplied by 2
    let mutated = nArray.map(item => item * 2);

    sum = 0

    for (i = 0; i < mutated.length; i ++) {
        sum += mutated[i];
    }

    return sum;

}

// map method: https://bit.ly/39mB7rW
// reduce method: https://bit.ly/3nzfgTc works in vs code, but not tq:
//      TypeError: Reduce of empty array with no initial value

