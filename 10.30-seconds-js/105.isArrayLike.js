const isArrayLike = (obj) => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike([1, 2, 3]); // true
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false