const frozenSet = (iterable) => {
  const s = new Set(iterable);
  s.add = undefined;
  s.delete = undefined;
  s.clear = undefined;
  return s;
};

let o = frozenSet([1, 2, 3, 1, 2]);  // Set { 1, 2, 3, add: undefined, delete: undefined, clear: undefined }

console.log(o);