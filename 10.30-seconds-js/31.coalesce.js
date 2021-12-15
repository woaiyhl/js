const coalesce = (...args) => args.find((v) => ![undefined, null].includes(v)); // ''

console.log(coalesce(null, undefined, '1', NaN, 'Waldo')); // '1'
