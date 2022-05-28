// 题目1
// const promise = new Promise((resolve, reject) => {
//   resolve("success1");
//   reject("error");
//   resolve("success2");
// });
// promise
// .then(res => {
//     console.log("then: ", res);
//   }).catch(err => {
//     console.log("catch: ", err);
//   })
// 构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用 。验证了第一个结论，Promise的状态一经改变就不能再改变

// 题目2
// const promise = new Promise((resolve, reject) => {
//   reject('error');
//   resolve('success2');
// });
// promise
//   .then((res) => {
//     console.log('then1: ', res);
//   })
//   .then((res) => {
//     console.log('then2: ', res);
//   })
//   .catch((err) => {
//     console.log('catch: ', err);
//   })
//   .then((res) => {
//     console.log('then3: ', res);
//   });
// catch不管被连接到哪里，都能捕获上层未捕捉过的错误。
// 至于then3也会被执行，那是因为catch()也会返回一个Promise，且由于这个Promise没有返回值，所以打印出来的是undefined

// 题目3
// Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });

// 题目4
// Promise.reject(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     console.log(err);
//     return 3
//   })
//   .then(res => {
//     console.log(res);
//   });

// 题目5
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('timer')
//     resolve('success')
//   }, 1000)
// })
// const start = Date.now();
// promise.then(res => {
//   console.log(res, Date.now() - start)
// })
// promise.then(res => {
//   console.log(res, Date.now() - start)
// })

// 题目6
// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)


// 题目7
Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})
