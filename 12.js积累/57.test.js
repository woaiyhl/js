Array.prototype.myPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i]
  }
  return this.length
}

let arr = [1, 2, 3, 4, 5]
let len = arr.myPush(6, 7, 8)
console.log(arr, len)