const daysAgo = (n) => {
  let d = new Date();
  d.setDate(d.getDate() - Math.abs(n));
  console.log(d);
  return d.toISOString().split('T')[0];
};
console.log(daysAgo(20));
