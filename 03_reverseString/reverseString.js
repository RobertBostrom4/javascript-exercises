const reverseString = function (string) {
    let splittedString = string.split('');
    let reversedString = '';

    for (i = splittedString.length; i > 0; i--) {
        reversedString += splittedString[i-1];
        
    }
    
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
