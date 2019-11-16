// Takes a number, returns a String. If the number is divisible by 3,
// the String reads "Fizz", otherwise it's empty.
const fizz = (n) => (n % 3 === 0 ? 'Fizz' : '');

// Same as "fizz" above, but checks if the number is divisible by 5,
// then the String will read "Buzz"
const buzz = (n) => (n % 5 === 0 ? 'Buzz' : '');

// Tries to interpolate "Fizz" and "Buzz" in a String, and if that String
// turns out to be empty, then it interpolates the number instead.
const fizzBuzz = (n) => `${fizz(n)}${buzz(n)}` || `${n}`;

module.exports = fizzBuzz;
