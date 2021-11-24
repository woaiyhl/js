const assertValidKeys = (obj, keys) => Object.keys(obj).every((key) => keys.includes(key))

console.log(assertValidKeys({ id: 10, name: 'apple' }, ['id', 'name'])) //true
console.log(assertValidKeys({ id: 10, name: 'apple' }, ['id', 'type'])) // false
