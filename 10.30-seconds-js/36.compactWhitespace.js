const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');

console.log(compactWhitespace('Lorem    Ipsum')); // 'Lorem Ipsum'
console.log(compactWhitespace('Lorem \n Ipsum')); // 'Lorem Ipsum'