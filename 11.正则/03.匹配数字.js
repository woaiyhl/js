// 匹配正整数
let isPositiveNum = val => {
	return /^[1-9]\d*$/.test(val);
};
console.log(isPositiveNum(9)) //true
console.log(isPositiveNum(2.2)) //false


// 匹配负整数
let isNegativeNum = val => {
  return /^-[1-9]\d*$/.test(val);
};
console.log(isNegativeNum(-9)) //true
console.log(isNegativeNum(2.2)) //false

// 匹配整数
let isInteger = val => {
	return /^(-|\+)?\d+$/.test(val);
};
console.log(isInteger(-9)) //true
console.log(isInteger(2.2)) //false
console.log(isInteger(+0)) 
console.log(isInteger(-0)) 

// 匹配非负浮点数
let isNotNegativeFloatNum = val => {
	return /^\d+(\.\d+)?$/.test(val);
};
console.log(isNotNegativeFloatNum(-9)) //false
console.log(isNotNegativeFloatNum(2.2)) //true
