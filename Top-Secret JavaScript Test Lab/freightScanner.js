function scan(stringsArray) {
    let searchString = "contraband";

    let count = 0;

    for (i = 0; i < stringsArray.length; i ++) {
        if (stringsArray[i] === searchString) {
            count += 1; 
        }
    }
    return count;
}

