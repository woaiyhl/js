// 1.replace不会改变原来的字符串，而是产生一个新的字符串
let _dete = '20180408000000';
function formatStr(str) {
  return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1-$2-$3 $4:$5:$6');
}
let dealDate = formatStr(_dete);

/*
  2.$1 $2 代表 分别 正则表达式 子表达式(\w+) 和 (\w+) 的值
    /(\w+)\s(\w+)/
      $1    $2
  */
var reg = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr1 = str.replace(reg, '$2,$1');
var newstr2 = str.replace(reg, '$2$1');
console.log(newstr1); // Smith, John
console.log(newstr2); // SmithJohn

// 3.
