const chunkify = function* (itr, size) {
  let chunk = [];
  for (const v of itr) {
    chunk.push(v);
    if (chunk.length === size) {
      yield chunk;
      chunk = [];
    }
  }
  if (chunk.length) yield chunk;
};

const x = new Set([1, 2, 1, 3, 4, 1, 2, 5]);
console.log([...chunkify(x, 2)]); // [[1, 2], [3, 4], [5]]
