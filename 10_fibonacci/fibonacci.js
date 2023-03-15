const fibonacci = function(n) {
    n = Number(n);
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return (fibonacci(n-1) + fibonacci(n-2));
    }
};

// Do not edit below this line
module.exports = fibonacci;
