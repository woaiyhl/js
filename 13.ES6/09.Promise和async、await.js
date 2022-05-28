// 题目1
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log("async2");
// }
// async1();
// console.log('start')
// 「紧跟着await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中」

// 题目2
// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   setTimeout(() => {
//     console.log('timer')
//   }, 0)
//   console.log("async2");
// }
// async1();
// console.log("start")



