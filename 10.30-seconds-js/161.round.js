const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
console.log(round(1.005, 2));// 1.01
console.log(round(1.065, 1)); //1.1
console.log(round(21.565)); //22
console.log(round(1.156, 1)); //1.2
console.log(round(1.245, 1)); //1.2