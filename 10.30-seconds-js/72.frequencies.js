const frequencies = (arr) =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {});

let o1 = frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // { a: 4, b: 2, c: 1 }
let o2 = frequencies([...'ball']); // { b: 1, a: 1, l: 2 }

console.log(o1,o2);
