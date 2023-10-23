import { capitalize, reverseString } from './functions';

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
