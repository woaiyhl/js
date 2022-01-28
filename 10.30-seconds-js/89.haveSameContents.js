const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter(e => e === v).length !== b.filter(e => e === v).length)
      return false;
  return true;
};

let b1 = haveSameContents([1, 2, 4], [2, 4, 1]); // true
let b2 = haveSameContents([1, 2, 4], [2, 4, 5]); // false

console.log(b1,b2);