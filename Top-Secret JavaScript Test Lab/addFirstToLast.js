function addFirstToLast (inputArray) {
    // .length is in like len() in python
    if (inputArray.length > 0) {
        return inputArray[0] + inputArray[inputArray.length - 1];
    } else {
        return  "";
    }
}

// Finding final element in an array
// let lastItem = arr[arr.length - 1]
