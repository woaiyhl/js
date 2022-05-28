// 题1 
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);
/*
 过程分析
promise中并没有resolve或者reject,因此promise.then并不会执行，它只有在被改变了状态之后才会执行。 
*/

// 题2
// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1')
//   resolve('resolve1')
// })
// const promise2 = promise1.then(res => {
//   console.log(res)
// })
// console.log('1', promise1);
// console.log('2', promise2);

/* 
过程分析：

从上至下，先遇到new Promise，执行该构造函数中的代码promise1
碰到resolve函数, 将promise1的状态改变为resolved, 并将结果保存下来
碰到promise1.then这个微任务，将它放入微任务队列
promise2是一个新的状态为pending的Promise
执行同步代码1， 同时打印出promise1的状态是resolved
执行同步代码2，同时打印出promise2的状态是pending
宏任务执行完毕，查找微任务队列，发现promise1.then这个微任务且状态为resolved，执行它。

*/




