let arr = [1, [2, [3, [4, 5]]], 6];
// 法一： flat
const res = arr.flat(Infinity);
console.log(res, '111');
// 法二：reduce + 递归
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
const res1 = flatten(arr);
// 法三：push + 递归
let res2 = [];
const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res2.push(arr[i]);
    }
  }
};
fn(arr);
// 法四：while + ...(扩展运算符)
function flat(arr) {
  // 循环数组中的元素判断元素是否为数组
  while (arr.some((item) => Array.isArray(item))) {
    // 解构数组
    arr = [].concat(...arr);
  }
  return arr;
}
