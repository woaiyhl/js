const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length

console.log(average(...[1, 2, 3])) // 2
console.log(average(1, 2, 3)) // 2
