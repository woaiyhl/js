const addWeekDays = (startDate, count) =>
  Array.from({ length: count }).reduce((date) => {
    date = new Date(date.setDate(date.getDate() + 1))
    if (date.getDay() % 6 === 0) date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)))
    return date
  }, startDate)

console.log(addWeekDays(new Date('Oct 09, 2020'), 5))
console.log(addWeekDays(new Date('Oct 12, 2020'), 5))
