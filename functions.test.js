import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from './functions';

test('capitalize word', () => {
  expect(capitalize('bee')).toBe('Bee');
});

test('capitalize word', () => {
  expect(capitalize('honey')).toBe('Honey');
});

test('capitalize word', () => {
  expect(capitalize('Pollen')).toBe('Pollen');
});

test('reverse word', () => {
  expect(reverseString('mouse')).toBe('esuom');
});

test('reverse word', () => {
  expect(reverseString('computer')).toBe('retupmoc');
});

test('reverse word', () => {
  expect(reverseString('high five')).toBe('evif hgih');
});

test('add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(40, 60)).toBe(-20);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(10, 4)).toBe(40);
});

test('divide two numbers', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test('caesar cipher', () => {
  expect(caesarCipher('zebra', 1)).toBe('afcsb');
});

test('caesar cipher', () => {
  expect(caesarCipher('Hello World!', 5)).toBe('Mjqqt Btwqi!');
});
