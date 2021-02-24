function scanAndFilter(stringsArray, string) {
    // filter returns an array of all matching elements
    // in this case all items of an array that aren't equal to the input string 
    let filteredArray = stringsArray.filter(item => item !== string);
    return filteredArray;
}

// Filter method: https://bit.ly/3scN6RG

