const accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], [])

console.log(accumulate(1, 2, 3, 4));  // [1, 3, 6, 10]
console.log(accumulate(...[1, 2, 3, 4]));  // [1, 3, 6, 10]