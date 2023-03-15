const caesar = function(string, shiftBy) {
    const minLower = 97;
    const maxLower = 122;
    const minUpper = 65;
    const maxUpper = 90;

    string = string.split('');
    for (let i = 0; i < string.length; i++) {
        let letter = string[i].charCodeAt();
        shiftBy %= 26;
        let shifted = letter + shiftBy;

        if (letter >= minLower && letter <= maxLower) {     //is lowercase
            if (shifted > maxLower) {
                string[i] = String.fromCharCode(shifted - 26);
            }
            else if (shifted < minLower) {
                string[i] = String.fromCharCode(shifted + 26);
            }
            else string[i] = String.fromCharCode(shifted);
        }
        else if (letter >= minUpper && letter <= maxUpper) {    //is uppercase
            if (shifted > maxUpper) {
                string[i] = String.fromCharCode(shifted - 26);
            }
            else if (shifted < minUpper) {
                string[i] = String.fromCharCode(shifted + 26);
            }
            else string[i] = String.fromCharCode(shifted);
        }
    }
    return string = string.join('');
};


//regex for alphabets /[a-z]/i/

//'a' = 97, 'z' = 122
//'A' = 65, 'Z' = 90


// Do not edit below this line
module.exports = caesar;
