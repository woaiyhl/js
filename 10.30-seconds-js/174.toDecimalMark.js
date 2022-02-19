const toDecimalMark = (num) => num.toLocaleString('en-US');

let str = toDecimalMark(12305030388.9087); // '12,305,030,388.909'
console.log(str);
let str1 = toDecimalMark(123050303887)
console.log(str1);