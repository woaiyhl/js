const isSorted = (arr) => {
  if (arr.length <= 1) return 0;
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
  }
  return Math.sign(direction);
};
// 正序返回1，倒叙返回-1，不排序返回0
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
isSorted([4]); // 0

console.log(isSorted([2,3,4,5,6,7]));
console.log(isSorted([200,100,3,2,1]));