const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
