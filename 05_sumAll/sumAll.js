const sumAll = function(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number' || a < 0 || b < 0) {
        return "ERROR";
    }
    let bigger, smaller, sum = 0;
    if (a > b) {
        bigger = a;
        smaller = b;
    }
    else {
        bigger = b;
        smaller = a;
    }

    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
