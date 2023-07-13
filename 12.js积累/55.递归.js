/**
 *  1.斐波那契数列
 * 1,1,2,3,5,8,13,21,34,55,89...求第 n 项
 * 
 */
// 1.递归实现
function fib(n) {
  if(n === 1 || n === 2) {
    return 1
  }
  return fib(n-1) + fib(n-2)
}

// 2.非递归实现
function fib(n) {
  let a = 1
  let b = 1
  let c = a + b
  for(let i = 3;i < n;i++) {
    a = b
    b = c
    c = a + b
  }
  return c
}
console.log(fib(5))

