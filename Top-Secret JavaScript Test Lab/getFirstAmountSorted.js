function getFirstAmountSorted(inputArray, inputNumber) {
    
    // Sorting the input array 
    let sortedArray = inputArray.sort();

    // New array that is the first N elements of the input array
    newArray = sortedArray.slice(0, inputNumber);

    return newArray;
}

/* 
let test = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);

console.log(test); */