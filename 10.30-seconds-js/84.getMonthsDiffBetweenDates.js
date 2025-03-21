const getMonthsDiffBetweenDates = (dateInitial, dateFinal) =>
  Math.max(
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 + dateFinal.getMonth() - dateInitial.getMonth(),
    0,
  );

let diff = getMonthsDiffBetweenDates(new Date('2017-12-13'), new Date('2018-04-29')); // 4
console.log(diff);