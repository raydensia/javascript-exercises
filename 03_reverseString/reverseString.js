const reverseString = function(string) {
    // let word;
    // string = string.split(" ");
    // string = string.reverse();
    // for (let i = 0; i < string.length; i++) {
    //     word = string[i];
    //     word = word.split("").reverse().join("");
    //     string[i] = word;
    // }
    // string = string.join(" ");
    
    return string.split("").reverse.join;

    let reversedString = [];
    let length = string.length - 1;
    string = string.split("");

    for (let i = length; i >= 0; i--) {
        reversedString.push(string[i]);
    }

    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
