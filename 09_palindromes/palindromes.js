const palindromes = function (word) {

    let lowerCase = word.toLowerCase();
    let onlyChars = lowerCase.match(/[a-z]/g);
    let justTheWord = "";
    for (i = 0; i < onlyChars.length; i++) {
        justTheWord += onlyChars[i];
    }
    let palindrome = "";
    for (i = justTheWord.length - 1; i >= 0; i--) {
        palindrome += justTheWord[i];
    }

    return palindrome === justTheWord;

};

// Do not edit below this line
module.exports = palindromes;
