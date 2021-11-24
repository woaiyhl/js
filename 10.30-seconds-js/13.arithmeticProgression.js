const arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n)

console.log(arithmeticProgression(5, 25)) //[ 5, 10, 15, 20, 25 ]
console.log(Array.from([1, 2, 3], (x) => x + x))
