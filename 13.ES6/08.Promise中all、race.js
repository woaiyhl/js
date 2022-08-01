// 题目1
// function runAsync(x) {
//   const p = new Promise((r) => setTimeout(() => r(x, console.log(x)), 1000));
//   return p;
// }
// function runReject(x) {
//   const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x));
//   return p;
// }
// Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// .catch是会捕获最先的那个异常

// 题目2
// function runAsync (x) {
//   const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//   return p
// }
// Promise.race([runAsync(1), runAsync(2), runAsync(3)])
//   .then(res => console.log('result: ', res))
//   .catch(err => console.log(err))

setTimeout(() => {
  console.log('A');
  Promise.resolve().then(() => {
    console.log('B');
  })
},1000)
Promise.resolve().then(() => {
  console.log('C');
})
new Promise((resolve) => {
  console.log('D');
  resolve('')
}).then(() => {
  console.log('E');
})
async function sum(a,b) {
  console.log('F');
}
async function asyncSum(a,b) {
  await Promise.resolve()
  console.log('G');
  return Promise.resolve(a + b)
}
sum(3,4)
asyncSum(3,4)
console.log('h');