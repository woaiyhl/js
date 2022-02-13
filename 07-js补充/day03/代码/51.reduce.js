// 数组元素做些聚合
let reduceArr = recommendMerchantList.reduce((acc, current) => {
  if (!acc.length) {
    acc.push(current);
  } else {
    let recommendDescArr = acc.map((e) => e.recommendDesc);
    if (!recommendDescArr.includes(current.recommendDesc)) {
      acc.push(current);
    } else {
      acc.forEach((item) => {
        if (item.recommendDesc === current.recommendDesc) {
          item.alipayAppId = item.alipayAppId + ' ' + current.alipayAppId;
          item.wechatAppId = item.wechatAppId + ' ' + current.wechatAppId;
        }
      });
    }
  }
  return acc;
}, []);

// 经典求和(本质还是将多个元素聚合成一个)
function Accumulation(...vals) {
  return vals.reduce((t, v) => t + v, 0);
}
// 权重求和
const scores = [
  { score: 90, subject: 'chinese', weight: 0.5 },
  { score: 95, subject: 'math', weight: 0.3 },
  { score: 85, subject: 'english', weight: 0.2 },
];
const result = scores.reduce((t, v) => t + v.score * v.weight, 0); // 90.5

// 数组分割
function Chunk(arr = [], size = 1) {
  return arr.length
    ? arr.reduce((t, v) => (t[t.length - 1].length === size ? t.push([v]) : t[t.length - 1].push(v), t), [[]])
    : [];
}
console.log(Chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// function chunk(arr = [], size = 1) {
//   let index = 0
//   let resIndex = 0
//   let res = []
//   let len = Math.ceil(arr.length / size)
//   res.length = len
//   while (index < arr.length) {
//     res[resIndex++] = arr.slice(index, (index += size))
//   }
//   return res
// }
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// 数组扁平
function Flat(arr = []) {
  return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), []);
}
const arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
Flat(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// 数组去重
function Uniq(arr = []) {
  return arr.reduce((t, v) => (t.includes(v) ? t : [...t, v]), []);
}

// 数组成员独立拆解
function Unzip(arr = []) {
  return arr.reduce(
    (t, v) => (v.forEach((w, i) => t[i].push(w)), t),
    Array.from({ length: Math.max(...arr.map((v) => v.length)) }).map((v) => []),
  );
}
const arr = [
  ['a', 1, true],
  ['b', 2, false],
];
Unzip(arr); // [["a", "b"], [1, 2], [true, false]]

// 数组成员个数统计
function Count(arr = []) {
  return arr.reduce((t, v) => ((t[v] = (t[v] || 0) + 1), t), {});
}
const arr = [0, 1, 1, 2, 2, 2];
Count(arr); // { 0: 1, 1: 2, 2: 3 }

// 数组成员个数最大
function MostFrequent(arr = []) {
  return   Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];
}
MostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // 'a'

// 数组成员位置记录
function Position(arr = [], val) {
  return arr.reduce((t, v, i) => (v === val && t.push(i), t), []);
}

const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];
Position(arr, 2); // [0, 4]

// 数组成员特性分组
function Group(arr = [], key) {
  return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}
const arr = [
  { area: 'GZ', name: 'YZW', age: 27 },
  { area: 'GZ', name: 'TYJ', age: 25 },
  { area: 'SZ', name: 'AAA', age: 23 },
  { area: 'FS', name: 'BBB', age: 21 },
  { area: 'SZ', name: 'CCC', age: 19 },
]; // 以地区area作为分组依据
Group(arr, 'area'); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }

// 数组成员所含关键字统计
function Keyword(arr = [], keys = []) {
  return keys.reduce((t, v) => (arr.some((w) => w.includes(v)) && t.push(v), t), []);
}
const text = [
  '今天天气真好，我想出去钓鱼',
  '我一边看电视，一边写作业',
  '小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心',
  '最近上班喜欢摸鱼的人实在太多了，代码不好好写，在想入非非',
];
const keyword = ['偷懒', '喜欢', '睡觉', '摸鱼', '真好', '一边', '明天'];
Keyword(text, keyword); // ["喜欢", "摸鱼", "真好", "一边"]

// 字符串翻转
function ReverseStr(str = '') {
  return str.split('').reduceRight((t, v) => t + v);
}
const str = 'reduce最牛逼';
ReverseStr(str); // "逼牛最ecuder"

// 斐波那契数列
function Fibonacci(len = 2) {
  const arr = [...new Array(len).keys()];
  return arr.reduce((t, v, i) => (i > 1 && t.push(t[i - 1] + t[i - 2]), t), [0, 1]);
}
Fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
