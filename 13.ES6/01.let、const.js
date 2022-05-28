/* // var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2; */


/* var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined */


/* var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5 */

var a = [];
for (var i = 0; i < 10; i++) {
  console.log(i);
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10