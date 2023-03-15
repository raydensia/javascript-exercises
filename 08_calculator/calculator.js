const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  array.forEach((number) => sum += number);
  return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach((number) => product *= number)
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num == 0) return 1;
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
