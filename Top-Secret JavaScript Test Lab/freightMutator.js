function mutate(stringsArray) {
    let mutatedArray = [];

    for (i = 0; i < stringsArray.length; i ++) {
        // toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
        let capitalised = stringsArray[i].toLocaleUpperCase('en-US');
        mutatedArray.push(capitalised);
        }
    

    /* Works well in terminal
    Doesn't in twilio quest interpreter: TypeError: Cannot read property 'toLocaleUpperCase' of undefined
    let i = 0;
        
    do {
        let capitalised = stringsArray[i].toLocaleUpperCase('en-US');
        mutatedArray.push(capitalised);
        i ++;
    } while (i < stringsArray.length); 
    */ 
    return mutatedArray;
}
