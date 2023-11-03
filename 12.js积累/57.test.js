/*
 * @Author: woaiyhl 2824054196@qq.com
 * @Date: 2023-07-13 10:59:07
 * @LastEditors: woaiyhl 2824054196@qq.com
 * @LastEditTime: 2023-11-03 21:07:54
 * @FilePath: /myCode/js/js/12.js积累/57.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Array.prototype.myPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i]
  }
  return this.length
}

let arr = [1, 2, 3, 4, 5]
let len = arr.myPush([7, 8])
console.log(arr, len)