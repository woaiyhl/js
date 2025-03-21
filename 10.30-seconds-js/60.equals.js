const equals = (a, b) => {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();

  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;

  if (a.prototype !== b.prototype) return false;

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  return keys.every((k) => equals(a[k], b[k]));
};

let b1 = equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
let b2 = equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
console.log(b1,b2);