const isBetweenDates = (dateStart, dateEnd, date) => date > dateStart && date < dateEnd;

isBetweenDates(new Date(2010, 11, 20), new Date(2010, 11, 30), new Date(2010, 11, 19)); // false
isBetweenDates(new Date(2010, 11, 20), new Date(2010, 11, 30), new Date(2010, 11, 25)); // true
