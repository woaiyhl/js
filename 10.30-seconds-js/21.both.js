// const both =
//   (f, g) =>
//   (...args) =>
//     f(...args) && g(...args)
// 等价于
function both(f, g) {
  return function (...args) {
    console.log(args, 'ssssss')
    return f(...args) && g(...args)
  }
}

const isEven = (num) => num % 2 === 0
const isPositive = (num) => num > 0
const isPositiveEven = both(isEven, isPositive)
//函数柯里化
console.log(isPositiveEven(4)) // true
console.log(isPositiveEven(-2)) // false
