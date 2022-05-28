// 冒泡排序(时间复杂度：O(n2)、空间复杂度: O(1))
let arr = [2, 4, 5, 1, 3];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let complete = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 解构赋值交换变量
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }
  return arr;
}

// sort方法的实现：冒泡排序
Array.prototype.mySort = function (compare) {
  for (let i = 0; i < this.length; i++) {
    let complete = true;
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (compare(this[j], this[j + 1]) > 0) {
        // [this[j + 1], this[j]] = [this[j], this[j + 1]]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return this;
};
console.log(arr.mySort((a, b) => b - a));
