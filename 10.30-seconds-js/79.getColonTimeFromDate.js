const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);

let time = getColonTimeFromDate(new Date()); // '08:38:00'
console.log(time);
