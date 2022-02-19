const tomorrow = () => {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

tomorrow(); // 2018-10-19 (if current date is 2018-10-18)

console.log(tomorrow());
console.log(new Date().toISOString().split('T')[0]);