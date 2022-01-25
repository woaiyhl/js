const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
console.log( new Date(2021, 2, 0));

console.log(daysInMonth(2020, 12)); // 31
console.log(daysInMonth(2024, 2)); //29