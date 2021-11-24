const allEqualBy = (arr, fn) => {
  const eql = fn(arr[0])
  return arr.every((val) => fn(val) === eql)
}

console.log(allEqualBy([1.1, 1.2, 1.3], Math.round)) // true
console.log(allEqualBy([1.1, 1.3, 1.6], Math.round)) // false
