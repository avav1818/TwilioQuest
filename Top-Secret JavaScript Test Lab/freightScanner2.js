function scan(stringsArray) {
    let searchString = "contraband";
    // stores the indexes where the searchString has been found 
    let searchStringIndexes = new Array(); // better to declare an empty array as "[]"

    // returning index values where contraband is found in the input array
    for (i = 0; i < stringsArray.length; i ++) {
        if (stringsArray[i] === searchString) {
            searchStringIndexes.push(i)
        }
    }

    return searchStringIndexes;
}

/*
let test = scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']);
console.log(test);
*/