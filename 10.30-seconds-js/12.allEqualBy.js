const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size

console.log(allUniqueBy([1.2, 2.4, 2.9], Math.round)) // true
console.log(allUniqueBy([1.2, 2.3, 2.4], Math.round)) // false
