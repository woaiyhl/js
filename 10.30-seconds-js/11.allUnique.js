const allUnique = (arr) => arr.length === new Set(arr).size

console.log(allUnique([1, 2, 3, 4])) // true
console.log(allUnique([1, 1, 2, 3])) // false
