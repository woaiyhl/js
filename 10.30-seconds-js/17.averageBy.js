const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : (val) => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length

console.log(averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n)) // 5
console.log(averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')) // 5
