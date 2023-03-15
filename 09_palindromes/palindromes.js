const palindromes = function (string) {
    // string = string.toLowerCase().split('').filter((i) => /^[a-zA-z]$/.test(i));
    // stringCopy = string.slice();
    // return (stringCopy.toString() === string.reverse().toString());
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
