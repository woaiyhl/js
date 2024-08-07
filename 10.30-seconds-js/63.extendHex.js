const extendHex = (shortHex) =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map((x) => x + x)
    .join('');

console.log(extendHex('#03f')); // '#0033ff'
extendHex('05a'); // '#0055aa'
