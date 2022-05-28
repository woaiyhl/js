// 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x,y,z);

console.log();
let str = 'hello'
function toUpper([first,...rest]) {
  console.log(first,rest);
  return first.toUpperCase() + rest.join('')
}
let str1 = ['a','b','v'].join('-')
console.log(str1,'str1');
console.log(toUpper(str));
// 字符串每个单词首字母大写
function titlize(str) {
  return str.replace(/(?:^|\s)\w/g,'$1')
}
function dataType(data,type) {
  return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, (c,$1) => {
    console.log(c,$1,'cccc');
    return $1
  })
}
console.log(dataType(111));

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
