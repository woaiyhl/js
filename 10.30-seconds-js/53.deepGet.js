const deepGet = (obj, keys) =>
  keys.reduce(
    (xs, x) => {
      console.log(xs,x);
     return xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null
    },
    obj
  );
  let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};
console.log(deepGet(data, ['foo', 'foz', index])); //3
console.log(deepGet(data, ['foo', 'bar', 'baz', 8, 'foz'])); //null