const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a = []) {
  let sum = 0;
  a.forEach(b => sum += b);
  return sum;
};

const multiply = function (a = []) {
  let product = 1;
  a.forEach(b => product *= b);
  return product;
};

const power = function (a, b) {
  let result = 1;
  for (i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (a) {
  let result = 1;
  for (i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
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
