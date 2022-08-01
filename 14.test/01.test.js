/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(arr);
  let len = arr.length
  let m = len - 1
  return arr.length % 2 !== 0 ?  arr[m / 2] : ( arr[len / 2] + arr[len / 2 - 1] ) / 2
};
let num = findMedianSortedArrays([1, 3, 2], [2, 5, 46]);
console.log(num);
