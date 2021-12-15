const complement = fn => (...args) => !fn(...args);

const isEven = num => num % 2 === 0;
const isOdd = complement(isEven);

console.log(isOdd(2)); // false
console.log(isOdd(3));  // true