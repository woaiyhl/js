const deepMerge = (a, b, fn) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
    {},
  );
  let obj = deepMerge(
    { a: true, b: { c: [1, 2, 3] } },
    { a: false, b: { d: [1, 2, 3] } },
    (key, a, b) => (key === 'a' ? a && b : Object.assign({}, a, b))
  );
  console.log(obj);
  // { a: false, b: { c: [ 1, 2, 3 ], d: [ 1, 2, 3 ] } }