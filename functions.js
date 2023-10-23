const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const reverseString = (string) => string.split('').reverse().join('');

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};

export { capitalize, reverseString, calculator };
