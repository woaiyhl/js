const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {},
  );

let o1 = getURLParameters('google.com'); // {}
let o2 = getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}

console.log(o1,o2);

let url = 'http://url.com/page?name=Adam&surname=Smith'
console.log(url.match(/([^?=&]+)(=([^&]*))/g));