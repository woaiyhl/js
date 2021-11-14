const addMinutesToDate = (date, n) => {
  const d = new Date(date);
  console.log(d.getTime(),'dd');
  d.setTime(d.getTime() + n * 60000);
  return d.toISOString().split('.')[0].replace('T',' ');
};

console.log(addMinutesToDate('2020-10-19 12:00:00', 10)); // '2020-10-19 12:10:00'
console.log(addMinutesToDate('2020-10-19', -10));  // '2020-10-18 23:50:00'