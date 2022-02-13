const isAnagram = (str1, str2) => {
  return normalize(str1) === normalize(str2);
};
const normalize = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '')
    .split('')
    .sort()
    .join('');
isAnagram('iceman', 'cinema'); // true
console.log(normalize('iceman'));
console.log(normalize('cinema'));