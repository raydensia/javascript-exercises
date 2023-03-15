const convertToCelsius = function(fahr) {
  return Number(((fahr - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(celc) {
  return Number(((celc * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
