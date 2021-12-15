const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join('')); // 'FooBar' // 'Foobar'

console.log(capitalize('fooBar')); //FooBar
console.log(capitalize('fooBar', true)); //Foobar
