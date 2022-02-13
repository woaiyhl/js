const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;

isWeekday(); // true (if current date is 2019-07-19)
console.log(isWeekday());
console.log(isWeekday(new Date('2022-02-13')))