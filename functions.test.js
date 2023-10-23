import { capitalize } from './functions';

test('capitalize word', () => {
  expect(capitalize('bee')).toBe('Bee');
});

test('capitalize word', () => {
  expect(capitalize('honey')).toBe('Honey');
});

test('capitalize word', () => {
  expect(capitalize('Pollen')).toBe('Pollen');
});
