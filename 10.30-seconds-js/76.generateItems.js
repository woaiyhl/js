const generateItems = (n, fn) => Array.from({ length: n }, (_, i) => fn(i));
const getRandom = (min) => Math.floor(Math.random() * (100- min + 1)) + min;

let a = generateItems(10, getRandom);
console.log(a);
