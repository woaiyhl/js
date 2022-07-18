// 1.判断各种数据类型
function isType(data) {
  return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, '$1');
}

// 2.反转字符串
// 法一
function reverseStr(str) {
  return [...str].reverse().join('');
}
// 法二
function reverseStr2(str) {
  let reverseArr = [];
  for (let index = str.length - 1; index >= 0; index--) {
    reverseArr.push(str[index]);
  }
  return reverseArr.join('');
}

// 3. js 去除字符串空格
var str = ' 6 6 ';
var str_1 = str.replace(/\s*/g, '');
console.log(str_1); //66

var str = ' 6 6 ';
var str_1 = str.replace(/^\s*|\s*$/g, '');
console.log(str_1); //6 6//输出左右侧均无空格

var str = ' 6 6 ';
var str_1 = str.replace(/^\s*/, '');
console.log(str_1); //6 6 //输出右侧有空格左侧无空格

var str = ' 6 6 ';
var str_1 = str.replace(/(\s*$)/g, '');
console.log(str_1); // 6 6//输出左侧有空格右侧无空格

// 4.查找字符串某个字符出现的次数
// 方法1： 通过for循环遍历寻找
/**
 * str { String } 完整字符串
 * tatget { String } 目标对象，要查找的字符串
 */
function searchStrEach(str, target) {
  let sum = 0;
  for (let key of str) {
    if (key == target) {
      sum++;
    }
  }
  return sum;
}
console.log(searchStrEach('sdsasads', 'd'));

// 方法2：通过字符串方法indexOf查找(indexOf 第二个参数：可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索。)
function searchStrIndexOf(str, target) {
  let index = str.indexOf(target);
  let sum = 0;
  while (index > -1) {
    index = str.indexOf(target, index + 1);
    sum++;
  }
  return sum;
}
console.log(searchStrEach('sdsasads', 'd'));

// 方法3：通过数组方法split分割查找
function searchStrSplit(str, target) {
  return str.split(target).length - 1;
}
console.log(searchStrEach('sdsasads', 'd'));

// 方法4:

// 5.生成5个随机数(1-10之间)
let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  for (let j = 0; j < i; j++) {
    if (arr[j] === arr[i]) {
      i--;
    }
  }
}
// 6.去重
// (1) filter
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
function unique(arr) {
  return arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);
}
// 7.扁平
function flat(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
function flat(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flat(cur) : cur), []);
}
function flat(arr, depth = 1) {
  return depth === 0 ? arr : arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur), []);
}
// 8.instanceOf
function instanceOf(left, right) {
  let proto = left.__proto__;
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = proto.__proto__;
  }
}
// 9.new

// 10.深浅拷贝
// (1) 浅拷贝
function shallowClone(source) {
  return Object.keys(source).reduce((acc, cur) => {
    acc[cur] = source[cur];
    return acc;
  }, {});
}
// (2) 深拷贝
function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone');
  }
  const targetObj = Array.isArray(source) ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}
// 11.节流、防抖
// 时间戳
function throttle(fn, delay = 300) {
  let time = 0;
  return () => {
    let now = new Date();
    if (now - time > delay) {
      fn.call(this);
      time = now;
    }
  };
}
// 定时器
function throttle(fn,delay = 300) {
  let timeout
  return () => {
    if(!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this)
        timeout = null
      },delay)
    }
  }
}

// 防抖
function debounce(fn,delay = 300) {
  let timeout
  return () => {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this)
    },delay)
  }
}
// 12.promise
Promise.all = function (arr) {
  let res = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      Promise.resolve(item)
        .then((val) => {
          res[index] = val;
          count++;
          if (count === arr.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// 13.冒泡排序
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let complete = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        complete = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (complete) {
      break;
    }
  }
}e
// 14.两数之和
var twoSum = function(nums, target) {
  if(!nums) return [];
  // 创建字典表
  const m = new Map();
  // 遍历nums数组
  for(let i = 0; i < nums.length; i++){
    // 获取当前值
    const n = nums[i];
    // 获取对当前与该值匹配的数值
    const n2 = target - nums[i];
    // 判断目标值是否在字典中
    if(m.has(n2)){
      // 是，在返回目标值的坐标和当前数值的坐标
      return [m.get(n2),i]
    }
    // 不在字典中，则放入字典，key为数值，value为下标
    m.set(n,i)
  }
};

//15.平铺的数组转tree
function treeMap(arr, pid = 0) {
  return arr.filter(item => item.pid === pid).map((item) => ({
    ...item,
    children: treeMap(arr, item.id)
  }))
}
const input = [
  { id: 1, pid: 0 },
  { id: 2, pid: 1 },
  { id: 3, pid: 2 },
  { id: 4, pid: 3 },
  { id: 5, pid: 2 },
  { id: 6, pid: 3 },
  { id: 7, pid: 1 },
  { id: 8, pid: 4 },
];
let output = treeMap(input)
console.log(output);
// const output = [
//     {
//         id: 1,
//         pid: 0,
//         children: [
//             {
//                 id: 2,
//                 pid: 1,
//                 children: [
//                     {
//                         id: 3,
//                         pid: 2,
//                         children: [{}],
//                     },
//                 ],
//             },
//             {
//                 id: 7,
//                 pid: 1,
//                 children: [],
//             },
//         ],
//     },
// ];
