// const powerset = (arr) => arr.reduce((a, v) => a.concat(a.map((r) => r.concat(v))), [[]]);
function powerset(arr) {
  return arr.reduce((a,v) => {
    console.log(a,'aaaaa');
    return a.concat(a.map(r => r.concat(v)))
  },[[]])
}
powerset([1, 2]); // [[], [1], [2], [1, 2]]
console.log(powerset([1, 2,3]));