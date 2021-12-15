const countWeekDaysBetween = (startDate, endDate) =>
  Array.from({ length: (endDate - startDate) / (1000 * 3600 * 24) }).reduce((count) => {
    if (startDate.getDay() % 6 !== 0) count++;
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    return count;
  }, 0);

let a = countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 06, 2020')); // 1
let b = countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 14, 2020')); // 7
console.log(a);
console.log(b);
