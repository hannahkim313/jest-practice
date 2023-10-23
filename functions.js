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

const getShiftedIndex = (index, shift) => {
  if (index + shift > 25) {
    return index + shift - 26;
  }

  return index + shift;
};

const caesarCipher = (string, shift) => {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const chars = string.split('');

  chars.forEach((char, index) => {
    if (lowerAlphabet.includes(char)) {
      const indexOfChar = lowerAlphabet.indexOf(char);
      chars[index] = lowerAlphabet[getShiftedIndex(indexOfChar, shift)];
    }

    if (upperAlphabet.includes(char)) {
      const indexOfChar = upperAlphabet.indexOf(char);
      chars[index] = upperAlphabet[getShiftedIndex(indexOfChar, shift)];
    }
  });

  return chars.join('');
};

export { capitalize, reverseString, calculator, caesarCipher };
