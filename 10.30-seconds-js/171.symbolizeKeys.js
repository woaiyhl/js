const symbolizeKeys = (obj) => Object.keys(obj).reduce((acc, key) => ({ ...acc, [Symbol(key)]: obj[key] }), {});
let obj = symbolizeKeys({ id: 10, name: 'apple' });
// { [Symbol(id)]: 10, [Symbol(name)]: 'apple' }

console.log(obj);