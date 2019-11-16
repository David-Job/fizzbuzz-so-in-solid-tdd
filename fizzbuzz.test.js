/* eslint-disable no-undef */
const fizzBuzz = require('./fizzbuzz');

test('adds 1 + 2 to equal 3', () => {
  expect(fizzBuzz(1)).toBe('1');
  expect(fizzBuzz(2)).toBe('2');
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(4)).toBe('4');
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(6)).toBe('Fizz');
  expect(fizzBuzz(9)).toBe('Fizz');
  expect(fizzBuzz(10)).toBe('Buzz');
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});
