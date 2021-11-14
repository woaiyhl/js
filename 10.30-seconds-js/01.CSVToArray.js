const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map((v) => v.split(delimiter))

console.log(CSVToArray('a,b\nc,d')) // [['a', 'b'], ['c', 'd']];
console.log(CSVToArray('a;b\nc;d', ';')) // [['a', 'b'], ['c', 'd']];
console.log(
  CSVToArray('col1,col2\na,b\nc,d', ',', true),
) // [['a', 'b'], ['c', 'd']];
``
