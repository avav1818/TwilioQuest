function calculateMass(stringsArray) {
    let stringsLength = 0;

    for (i = 0; i < stringsArray.length; i ++) {
        stringsLength += stringsArray[i].length;
    }

    return stringsLength;
}

