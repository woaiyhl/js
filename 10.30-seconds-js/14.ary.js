const ary =
  (fn, n) =>
  (...args) =>
    fn(...args.slice(0, n))

const firstTwoMax = ary(Math.max, 2)
let arr = [
  [2, 6, 'a'],
  [6, 4, 8],
  [10, 12, 14],
].map((x) => firstTwoMax(...x))
console.log(arr)
